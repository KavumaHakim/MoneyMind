import DataTable from "react-data-table-component";

interface DataRow {
    Name: string;
    Amount: number;
    Class: string;
    Stream: string;
    id: number;
}

const columns = [
    {
    name: 'id',
    selector: (row: DataRow) => row.id,
    sortable: true,
    },
    {
    name: 'Name',
    selector: (row: DataRow) => row.Name,
    sortable: true,
    },
    {
    name: 'Amount',
    selector: (row: DataRow) => row.Amount,
    sortable: true,
    },
    {
    name: 'Class',
    selector: (row: DataRow) => row.Class,
    sortable: true,
    },
    {
    name: 'Stream',
    selector: (row: DataRow) => row.Stream,
    sortable: true,
    }
];


const data = [
    {
    id: 1,
    Name: 'Peter',
    Amount: 4000,
    Class: 'S.2',
    Stream: 'South',
    },
        {
    id: 2,
    Name: 'Mary',
    Amount: 40000,
    Class: 'S.4',
    Stream: 'North',
    },
        {
    id: 3,
    Name: 'Joan',
    Amount: 5000,
    Class: 'S.5',
    Stream: 'Alpha',
    },
        {
    id: 4,
    Name: 'Angel',
    Amount: 10000,
    Class: 'S.1',
    Stream: 'East',
    },
        {
    id: 5,
    Name: 'Moses',
    Amount: 3000,
    Class: 'S.2',
    Stream: 'West',
    },
];

const StudentTable = () => {
    return(
        <DataTable 
        title="Student's Data"  
        data={data} 
        columns={columns} 
        className="text-amber-400
        selectableRows
        "/>
    )
}
export default StudentTable;