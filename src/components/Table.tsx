import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

interface Student {
    id: number;
    name: string;
    class: string;
    stream: string;
    amount: number;
}


const StudentsTable = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const { fetchData } = useFetch();

    useEffect(() => {
        fetchData("/data.csv", setStudents);
    }, []);

    console.log(students);

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-red-600 ml-5">Students</h1>
            <DataTable value={students} className="w-[95%] mt-4">
                <Column field="id" header="ID" />
                <Column field="name" header="Name" />
                <Column field="class" header="Class" />
                <Column field="stream" header="Stream" />
                <Column field="amount" header="Amount" />
            </DataTable>
        </div>
    );
};

export default StudentsTable;
