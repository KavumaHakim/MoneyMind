import { IoHomeSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return(
        <div className="h-screen w-20 hidden bg-black md:flex flex-col items-center sticky top-0 left-0 z-50">
            <div className="flex flex-col gap-9 mt-10">
                <Link to="/"><IoHomeSharp size={30} className="text-[#cdc1c19d] hover:cursor-pointer hover:bg-[#2a2727] rounded-[5px]" /></Link>
                <IoMdNotifications size={30} className="text-[#cdc1c19d] hover:cursor-pointer" />
                <Link to='/data'><FaUserAlt size={30} className="text-[#cdc1c19d] hover:cursor-pointer" /></Link>
            </div>
        </div>
    )
}

export default Sidebar;