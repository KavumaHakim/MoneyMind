import Sidebar from "../components/Sidebar";
import Heading from "../components/header";


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
    return(
        <form className="text-white border-2 border-amber-600 p-3 rounded-2xl flex flex-col items-center">
            <h2 className="text-2xl font-[arial]">{formTitle}</h2>
            <div>
                <label htmlFor="StudentsName" className="text-2xl text-red-500">Enter name </label>
                <input id="StudentsName" placeholder="Student's Name" spellCheck className="outline-0 text-center w-full text-[20px] rounded-[10px] border border-red-300"/>
            </div>
            <div>
                <label htmlFor="StudentsClass" className="text-2xl text-red-500">Enter Class </label>
                <input id="StudentsClass" placeholder="Student's Class" className="outline-0 text-center w-full text-[20px] rounded-[10px] border border-red-300"/>
            </div>
            <div>
                <label htmlFor="StudentsAmount" className="text-2xl text-red-500">Enter Amount </label>
                <input id="StudentsAmount" placeholder="Student's Class" className="outline-0 text-center w-full text-[20px] rounded-[10px] border border-red-300"/>
            </div>
        </form>
    )
}


export default DataEntry;