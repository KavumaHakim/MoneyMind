import { IoHomeSharp } from "react-icons/io5";
import type { IconType } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import Sidebar from "../components/Sidebar";
import Heading from "../components/header";
import Chart from "../components/Chart";


const Dashboard = () => {
    return (
        <div className="flex flex-row bg-[#080808]">
            <Sidebar/>
            <div>
                <Heading />
                <h1 className="text-3xl font-bold text-red-600 ml-5">Dashboard</h1>
                    <div className="flex bg-[#202020] gap-4 flex-wrap max-h-fit pt-1.5 pb-1.5 items-center ml-4 mt-4 rounded-2xl w-full pl-1.5 pr-1.5 justify-center">
                        <InfoCard cardName="Average" icon={GiReceiveMoney} value="99999"/>
                        <InfoCard cardName="Total" icon={MdAttachMoney} value="999999"/>
                        <InfoCard cardName="" icon={FaUserAlt} value="766"/>
                        <InfoCard cardName="Students" icon={IoHomeSharp} value="766"/>
                        
                    </div>
                    <Chart />
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
            <Icon size={30} className="text-blue-600" />
            <h2 className="text-2xl text-white  mt-4">{cardName}</h2>
            <p className="text-white">
                {value}
            </p>
        </div>
    );
};

export default Dashboard;