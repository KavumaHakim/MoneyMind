import Sidebar from "../components/Sidebar";
import Heading from "../components/header";
import { useState } from "react";
import useStudents from "../Hooks/useStudents";
import type { CreateStudentData } from "../Hooks/useStudents";

interface StudentFormData {
    name: string;
    class: string;
    stream: string;
    amount: string;
}

const DataEntry = () => {
    return (
        <main className="flex bg-[#080808] w-full">
            <Sidebar/>
            {/* Main content container */}
            <div className="dashboard-content flex-1 overflow-y-auto flex flex-col gap-5">
                <Heading />
                <h1 className="text-3xl font-bold text-red-600 ml-5">Data Entry</h1>
                    <section className="flex bg-[#202020] gap-4 flex-wrap pt-1.5 pb-1.5 items-center mt-4 rounded-2xl w-[95%] md:flex-nowrap pl-1.5 pr-1.5 self-center">
                        {/*content */}
                        <DataForm formTitle="ADD NEW STUDENT"/>
                    </section>
            </div>
        </main>
        )
}

type formProps = {
    formTitle: string
}

const DataForm = ({formTitle = "Enter Data"}:formProps) => {
    const { addStudent, loading: studentsLoading } = useStudents();
    const [formData, setFormData] = useState<StudentFormData>({
        name: '',
        class: '',
        stream: '',
        amount: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear message when user starts typing
        if (message) {
            setMessage(null);
        }
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            setMessage({type: 'error', text: 'Student name is required'});
            return false;
        }
        if (!formData.class.trim()) {
            setMessage({type: 'error', text: 'Class is required'});
            return false;
        }
        if (!formData.stream.trim()) {
            setMessage({type: 'error', text: 'Stream is required'});
            return false;
        }
        if (!formData.amount.trim() || isNaN(Number(formData.amount.replace('$', '').replace(',', '')))) {
            setMessage({type: 'error', text: 'Valid amount is required'});
            return false;
        }
        const numericAmount = parseFloat(formData.amount.replace('$', '').replace(',', ''));
        if (numericAmount < 0) {
            setMessage({type: 'error', text: 'Amount cannot be negative'});
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        if (!validateForm()) return;

        setLoading(true);

        try {
            // Convert amount to number (remove $ and commas if present)
            const numericAmount = parseFloat(formData.amount.replace('$', '').replace(',', ''));

            const studentData: CreateStudentData = {
                name: formData.name.trim(),
                class: formData.class.trim(),
                stream: formData.stream.trim(),
                amount: numericAmount
            };

            const result = await addStudent(studentData);

            if (result.success) {
                setMessage({type: 'success', text: 'Student added successfully!'});
                
                // Reset form
                setFormData({
                    name: '',
                    class: '',
                    stream: '',
                    amount: ''
                });
            } else {
                setMessage({type: 'error', text: result.error || 'Failed to add student'});
            }

        } catch (error: any) {
            console.error('Error adding student:', error);
            setMessage({type: 'error', text: 'An unexpected error occurred'});
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            class: '',
            stream: '',
            amount: ''
        });
        setMessage(null);
    };

    const formatAmountInput = (value: string) => {
        // Remove non-numeric characters except decimal point
        const numericValue = value.replace(/[^0-9.]/g, '');
        
        // Ensure only one decimal point
        const parts = numericValue.split('.');
        if (parts.length > 2) {
            return parts[0] + '.' + parts.slice(1).join('');
        }
        
        return numericValue;
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatAmountInput(e.target.value);
        setFormData(prev => ({
            ...prev,
            amount: formattedValue
        }));
        
        if (message) {
            setMessage(null);
        }
    };

    return(
        <form onSubmit={handleSubmit} className="text-white border-2 border-amber-600 p-6 rounded-2xl flex flex-col items-center w-full max-w-md mx-auto">
            <h2 className="text-2xl font-[arial] mb-6">{formTitle}</h2>
            
            {message && (
                <div className={`w-full p-3 rounded mb-4 text-center ${
                    message.type === 'success' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-red-600 text-white'
                }`}>
                    {message.text}
                </div>
            )}

            <div className="w-full mb-4">
                <label htmlFor="name" className="block text-xl text-red-500 mb-2">Student Name *</label>
                <input 
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter student's name" 
                    className="outline-0 text-center w-full text-[18px] p-3 rounded-[10px] border border-red-300 text-black focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    required
                    disabled={loading}
                />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="class" className="block text-xl text-red-500 mb-2">Class *</label>
                <select 
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="outline-0 text-center w-full text-[18px] p-3 rounded-[10px] border border-red-300 text-black focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    required
                    disabled={loading}
                >
                    <option value="">Select Class</option>
                    <option value="s1">S1</option>
                    <option value="s2">S2</option>
                    <option value="s3">S3</option>
                    <option value="s4">S4</option>
                    <option value="s5">S5</option>
                </select>
            </div>

            <div className="w-full mb-4">
                <label htmlFor="stream" className="block text-xl text-red-500 mb-2">Stream *</label>
                <select 
                    id="stream"
                    name="stream"
                    value={formData.stream}
                    onChange={handleInputChange}
                    className="outline-0 text-center w-full text-[18px] p-3 rounded-[10px] border border-red-300 text-black focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    required
                    disabled={loading}
                >
                    <option value="">Select Stream</option>
                    <option value="alpha">Alpha</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                </select>
            </div>

            <div className="w-full mb-6">
                <label htmlFor="amount" className="block text-xl text-red-500 mb-2">Amount ($) *</label>
                <input 
                    id="amount"
                    name="amount"
                    type="text"
                    value={formData.amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount (e.g., 15000.50)" 
                    className="outline-0 text-center w-full text-[18px] p-3 rounded-[10px] border border-red-300 text-black focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    required
                    disabled={loading}
                />
                <small className="text-gray-400 text-sm mt-1">Enter numeric value only (decimals allowed)</small>
            </div>

            <div className="flex gap-4 w-full">
                <button 
                    type="submit" 
                    disabled={loading || studentsLoading}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold ${
                        loading || studentsLoading
                            ? 'bg-gray-500 cursor-not-allowed' 
                            : 'bg-green-600 hover:bg-green-700'
                    } text-white transition-colors`}
                >
                    {loading ? 'Adding...' : 'Add Student'}
                </button>
                
                <button 
                    type="button" 
                    onClick={resetForm}
                    disabled={loading}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold ${
                        loading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gray-600 hover:bg-gray-700'
                    } text-white transition-colors`}
                >
                    Reset
                </button>
            </div>
        </form>
    )
}

export default DataEntry;