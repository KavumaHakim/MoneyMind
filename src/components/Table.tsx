import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import papa from "papaparse";
import { useEffect, useState } from "react";

interface Student {
    id: number;
    name: string;
    class: string;
    stream: string;
    amount: number;
}

const StudentsTable = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        fetch("./MOCK_DATA.csv")
            .then((response) => response.text())
            .then((csvText) => {
                papa.parse<Student>(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    transform: (value, field) =>
                        field === 'id' || field === 'amount' ? Number(value) : value,
                    complete: (results) => {
                        console.log(results.data);
                        setStudents(results.data);
                    },
                });
            });
    }, []);
    students.map((s) => console.log(Object.keys(s)));


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
