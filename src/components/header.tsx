import { FaUserAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const Heading = () => {
    return (
        <div className="flex justify-between h-18 bg-black sticky top-0 z-50">
            <h1 className="text-5xl font-extrabold self-start ml-5 text-white ">MoneyMin_</h1>
            <div className="flex gap-5 self-center mr-2">
                <Notification />
                <Profile />
            </div>
        </div>
    );
};
const Notification = () => {
    return(
        <div className="relative">
            <p className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white">2</p>
            <IoMdNotifications size={50} className="text-[white]" />
        </div>
    )
}

const Profile = () => {
    return(
        <div>
            <FaUserAlt size={50} className="text-[white]" />
        </div>
    )
}

export default Heading;
export { Notification, Profile };
