import { IoHomeSharp } from "react-icons/io5";
import type { IconType } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import Sidebar from "../components/Sidebar";
import Heading from "../components/header";
import Chart from "../components/Chart";
import StudentTable from "../components/Table";

const Dashboard = () => {
    return (
        <div className="flex bg-[#080808] w-full">
            <Sidebar/>
            {/* Main content container */}
            <div className="dashboard-content flex-1 overflow-y-auto flex flex-col gap-5">
                <Heading />
                <h1 className="text-3xl font-bold text-red-600 ml-5">Dashboard</h1>
                    <div className="flex bg-[#202020] gap-4 flex-wrap pt-1.5 pb-1.5 items-center mt-4 rounded-2xl w-[95%] md:flex-nowrap pl-1.5 pr-1.5 justify-center self-center">
                        <InfoCard cardName="Total" icon={GiReceiveMoney} value="1090990"/>
                        <InfoCard cardName="Average" icon={MdAttachMoney} value="10900"/>
                        <InfoCard cardName="Students" icon={FaUserAlt} value="960"/>
                        <InfoCard cardName="Balance" icon={MdAccountBalanceWallet} value="76600"/>
                        <InfoCard cardName="Transactions" icon={GrTransaction} value="92"/>
                    </div>
                    <div className="flex justify-evenly gap-1.5 flex-nowrap flex-col md:flex-row">
                        <Chart title="Test 1" ctype='Line'/>
                        <Chart title="Test 2" ctype="Bar"/>
                        <Chart title="Test 3" ctype="Bar" />
                    </div>
                    <StudentTable />
            </div>
        </div>
        )
}


type InfoCardProps = {
    cardName: string;
    icon: IconType;
    value: string;
};

const InfoCard = ({ cardName, icon, value }: InfoCardProps) => {
    const Icon = icon;
    return (
        <div className="h-35 bg-black rounded-2xl w-full flex p-2 flex-col">
            <Icon size={30} className="text-amber-400" />
            <h2 className="text-2xl text-white  mt-4">{cardName || "N/A"}</h2>
            <p className="text-white">
                {value}
            </p>
        </div>
    );
};

export default Dashboard;