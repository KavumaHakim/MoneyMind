import { IoHomeSharp } from "react-icons/io5";
import type { IconType } from "react-icons";
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";



const Dashboard = () => {
    return (
        <div className="grid grid-cols-[200px_1fr] bg-[#080808]">
            <Sidebar/>
            <div>
                    <div className="flex bg-[#202020] gap-4 flex-wrap h-38 items-center ml-4 mt-4 rounded-2xl w-[54rem] justify-center">
                        <InfoCard cardName="Average" icon={GiReceiveMoney} value="99999"/>
                        <InfoCard cardName="Total" icon={MdAttachMoney} value="999999"/>
                        <InfoCard cardName="Students" icon={FaUserAlt} value="766"/>
                        <InfoCard cardName="Students" icon={IoHomeSharp} value="766"/>
                    </div>
            </div>
        </div>
        )
}

const Sidebar = () => {
    return(
        <div className="h-screen w-full bg-black flex flex-col items-center">
            <div className="flex flex-col gap-9 mt-10">
                <IoHomeSharp size={50} className="text-[#cdc1c19d]" />
                <IoMdNotifications size={50} className="text-[#cdc1c19d]" />
                <FaUserAlt size={50} className="text-[#cdc1c19d]" />
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
        <div className="h-35 bg-black rounded-2xl w-50 flex p-2 flex-col ">
            <Icon size={30} className="text-blue-600" />
            <h2 className="text-2xl text-white  mt-4">{cardName}</h2>
            <p className="text-white">
                {value}
            </p>
        </div>
    );
};

export default Dashboard;