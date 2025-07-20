import { FaUserAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const Heading = () => {
    return (
        <header className="flex justify-between h-18 bg-[#080808] w-full sticky top-0 z-50">
            <h1 className="text-5xl font-extrabold self-start ml-5 text-white ">MoneyMin_</h1>
            <div className="flex gap-5 self-center mr-2">
                <Notification amount="99" />
                <Profile />
            </div>
        </header>
    );
};
const Notification = ({ amount }: { amount: string }) => {
    return(
        <div className="relative">
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full min-w-[20px] h-5 flex items-center justify-center text-white text-xs font-bold px-1">
                {amount}
            </div>
            <IoMdNotifications size={30} className="text-amber-400" />
        </div>
    )
}

const Profile = () => {
    return(
        <div>
            <FaUserAlt size={30} className="text-amber-400" />
        </div>
    )
}

export default Heading;
export { Notification, Profile };
