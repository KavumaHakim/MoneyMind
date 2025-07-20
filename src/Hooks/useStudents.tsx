import { useState, useEffect, useCallback } from 'react';
import supabase from '../supabase-client';

export interface Student {
    id: number;
    name: string;
    class: string;
    stream: string;
    amount: number;
    created_at?: string;
    updated_at?: string;
}

export interface CreateStudentData {
    name: string;
    class: string;
    stream: string;
    amount: number;
}

export interface UpdateStudentData extends CreateStudentData {
    id: number;
}

export const useStudents = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch all students from the database
    const fetchStudents = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            
            const { data, error } = await supabase
                .from('students')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                throw error;
            }

            setStudents(data || []);
        } catch (error: any) {
            console.error('Error fetching students:', error);
            setError(error.message || 'Failed to fetch students');
        } finally {
            setLoading(false);
        }
    }, []);

    // Add a new student
    const addStudent = useCallback(async (studentData: CreateStudentData) => {
        try {
            setError(null);
            
            const { data, error } = await supabase
                .from('students')
                .insert([studentData])
                .select()
                .single();

            if (error) {
                throw error;
            }

            return { success: true, data };
        } catch (error: any) {
            console.error('Error adding student:', error);
            const errorMessage = error.message || 'Failed to add student';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        }
    }, []);

    // Update an existing student
    const updateStudent = useCallback(async (studentData: UpdateStudentData) => {
        try {
            setError(null);
            
            const { data, error } = await supabase
                .from('students')
                .update({
                    name: studentData.name,
                    class: studentData.class,
                    stream: studentData.stream,
                    amount: studentData.amount
                })
                .eq('id', studentData.id)
                .select()
                .single();

            if (error) {
                throw error;
            }

            return { success: true, data };
        } catch (error: any) {
            console.error('Error updating student:', error);
            const errorMessage = error.message || 'Failed to update student';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        }
    }, []);

    // Delete a student
    const deleteStudent = useCallback(async (studentId: number) => {
        try {
            setError(null);
            
            const { error } = await supabase
                .from('students')
                .delete()
                .eq('id', studentId);

            if (error) {
                throw error;
            }

            return { success: true };
        } catch (error: any) {
            console.error('Error deleting student:', error);
            const errorMessage = error.message || 'Failed to delete student';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        }
    }, []);

    // Get a single student by ID
    const getStudent = useCallback(async (studentId: number) => {
        try {
            setError(null);
            
            const { data, error } = await supabase
                .from('students')
                .select('*')
                .eq('id', studentId)
                .single();

            if (error) {
                throw error;
            }

            return { success: true, data };
        } catch (error: any) {
            console.error('Error fetching student:', error);
            const errorMessage = error.message || 'Failed to fetch student';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        }
    }, []);

    // Get students with filters
    const getStudentsWithFilter = useCallback(async (filters: {
        class?: string;
        stream?: string;
        minAmount?: number;
        maxAmount?: number;
    } = {}) => {
        try {
            setLoading(true);
            setError(null);
            
            let query = supabase.from('students').select('*');

            if (filters.class) {
                query = query.eq('class', filters.class);
            }
            
            if (filters.stream) {
                query = query.eq('stream', filters.stream);
            }
            
            if (filters.minAmount !== undefined) {
                query = query.gte('amount', filters.minAmount);
            }
            
            if (filters.maxAmount !== undefined) {
                query = query.lte('amount', filters.maxAmount);
            }

            const { data, error } = await query.order('created_at', { ascending: false });

            if (error) {
                throw error;
            }

            setStudents(data || []);
            return { success: true, data };
        } catch (error: any) {
            console.error('Error fetching filtered students:', error);
            const errorMessage = error.message || 'Failed to fetch students';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    }, []);

    // Get statistics
    const getStatistics = useCallback(async () => {
        try {
            const { data, error } = await supabase
                .from('students')
                .select('class, stream, amount');

            if (error) {
                throw error;
            }

            const stats = {
                total: data.length,
                totalAmount: data.reduce((sum: number, student: any) => sum + student.amount, 0),
                averageAmount: data.length > 0 ? data.reduce((sum: number, student: any) => sum + student.amount, 0) / data.length : 0,
                byClass: {} as Record<string, number>,
                byStream: {} as Record<string, number>,
            };

            // Count by class
            data.forEach((student: any) => {
                stats.byClass[student.class] = (stats.byClass[student.class] || 0) + 1;
            });

            // Count by stream
            data.forEach((student: any) => {
                stats.byStream[student.stream] = (stats.byStream[student.stream] || 0) + 1;
            });

            return { success: true, data: stats };
        } catch (error: any) {
            console.error('Error fetching statistics:', error);
            return { success: false, error: error.message || 'Failed to fetch statistics' };
        }
    }, []);

    // Set up real-time subscription
    useEffect(() => {
        fetchStudents();

        // Subscribe to real-time changes
        const channel = supabase
            .channel('students_changes')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'students',
                },
                (payload: any) => {
                    console.log('Students change received:', payload);
                    fetchStudents(); // Refetch data when changes occur
                }
            )
            .subscribe();

        // Cleanup subscription on unmount
        return () => {
            supabase.removeChannel(channel);
        };
    }, [fetchStudents]);

    return {
        // State
        students,
        loading,
        error,
        
        // Actions
        fetchStudents,
        addStudent,
        updateStudent,
        deleteStudent,
        getStudent,
        getStudentsWithFilter,
        getStatistics,
        
        // Utilities
        clearError: () => setError(null),
    };
};

export default useStudents;