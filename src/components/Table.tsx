import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import useStudents from "../Hooks/useStudents";
import type { Student } from "../Hooks/useStudents";

const StudentsTable = () => {
    const { students, loading, error, fetchStudents } = useStudents();

    const formatAmount = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const amountBodyTemplate = (student: Student) => {
        return formatAmount(student.amount);
    };

    const classBodyTemplate = (student: Student) => {
        return student.class.toUpperCase();
    };

    const streamBodyTemplate = (student: Student) => {
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                student.stream === 'alpha' ? 'bg-purple-100 text-purple-800' :
                student.stream === 'east' ? 'bg-blue-100 text-blue-800' :
                student.stream === 'west' ? 'bg-green-100 text-green-800' :
                student.stream === 'north' ? 'bg-yellow-100 text-yellow-800' :
                student.stream === 'south' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
            }`}>
                {student.stream.charAt(0).toUpperCase() + student.stream.slice(1)}
            </span>
        );
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold text-red-600 ml-5">Students</h1>
                <div className="w-[95%] mt-4 p-8 text-center">
                    <div className="text-white text-lg">Loading students...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold text-red-600 ml-5">Students</h1>
                <div className="w-[95%] mt-4 p-8 text-center">
                    <div className="text-red-500 text-lg mb-4">Error: {error}</div>
                    <button 
                        onClick={fetchStudents}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-between items-center w-[95%] mb-4">
                <h1 className="text-3xl font-bold text-red-600">Students</h1>
                <div className="flex items-center gap-4">
                    <div className="text-white text-sm">
                        Total: {students.length} students
                    </div>
                    <button 
                        onClick={fetchStudents}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                        title="Refresh data"
                    >
                        Refresh
                    </button>
                </div>
            </div>
            <DataTable 
                value={students} 
                className="w-[95%]"
                paginator 
                rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}
                stripedRows
                emptyMessage="No students found. Add some students using the Data Entry page."
                globalFilterFields={['name', 'class', 'stream']}
                header={
                    <div className="flex justify-between items-center p-4">
                        <div className="text-lg font-semibold">Student Records</div>
                        <div className="text-sm text-gray-600">
                            Use the Data Entry page to add new students
                        </div>
                    </div>
                }
            >
                <Column field="id" header="ID" sortable style={{ width: '80px' }} />
                <Column field="name" header="Name" sortable style={{ minWidth: '200px' }} />
                <Column field="class" header="Class" body={classBodyTemplate} sortable style={{ width: '100px' }} />
                <Column field="stream" header="Stream" body={streamBodyTemplate} sortable style={{ width: '120px' }} />
                <Column field="amount" header="Amount" body={amountBodyTemplate} sortable style={{ width: '150px' }} />
            </DataTable>
        </div>
    );
};

export default StudentsTable;
