import { IoHomeSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";


const Sidebar = () => {
    return(
        <div className="h-screen w-20 hidden bg-black md:flex flex-col items-center fixed top-0 left-0 z-50">
            <div className="flex flex-col gap-9 mt-10">
                <IoHomeSharp size={30} className="text-[#cdc1c19d] hover:cursor-pointer hover:bg-[#2a2727] rounded-[5px]" />
                <IoMdNotifications size={30} className="text-[#cdc1c19d] hover:cursor-pointer" />
                <FaUserAlt size={30} className="text-[#cdc1c19d] hover:cursor-pointer" />
            </div>
        </div>
    )
}

export default Sidebar;