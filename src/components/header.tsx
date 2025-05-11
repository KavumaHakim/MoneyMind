import { FaUserAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const Heading = () => {
    return (
        <header className="flex justify-between h-18 bg-[#080808] sticky top-0 z-50">
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
            <p className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-[15px]">{amount}</p>
            <IoMdNotifications size={30} className="text-[white]" />
        </div>
    )
}

const Profile = () => {
    return(
        <div>
            <FaUserAlt size={30} className="text-[white]" />
        </div>
    )
}

export default Heading;
export { Notification, Profile };
