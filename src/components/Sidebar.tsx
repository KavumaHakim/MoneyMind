
import { IoMdNotifications } from "react-icons/io";
import { FaUserPlus, FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        {
            path: "/",
            icon: MdDashboard,
            label: "Dashboard",
            description: "Overview & Statistics"
        },
        {
            path: "/data",
            icon: FaUserPlus,
            label: "Add Student",
            description: "Register new student"
        }
    ];

    return (
        <div className="h-screen w-20 hidden bg-black md:flex flex-col items-center sticky top-0 left-0 z-50">
            <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    
                    return (
                        <div key={item.path} className="relative group">
                            <Link 
                                to={item.path}
                                className={`block p-2 rounded-lg transition-all duration-200 ${
                                    isActive 
                                        ? 'bg-amber-600 text-white' 
                                        : 'text-[#cdc1c19d] hover:bg-[#2a2727] hover:text-amber-400'
                                }`}
                                title={item.label}
                            >
                                <Icon size={24} />
                            </Link>
                            
                            {/* Tooltip */}
                            <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                                <div className="font-semibold">{item.label}</div>
                                <div className="text-xs text-gray-300">{item.description}</div>
                                {/* Arrow */}
                                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                            </div>
                        </div>
                    );
                })}
                
                {/* Divider */}
                <div className="w-8 h-px bg-[#2a2727] my-2"></div>
                
                {/* Notifications - Static for now */}
                <div className="relative group">
                    <div className="p-2 rounded-lg text-[#cdc1c19d] hover:bg-[#2a2727] hover:text-amber-400 transition-all duration-200 cursor-pointer">
                        <IoMdNotifications size={24} />
                        {/* Notification badge */}
                        <div className="absolute -top-1 -right-1 bg-red-500 rounded-full min-w-[18px] h-[18px] flex items-center justify-center text-white text-xs font-bold">
                            3
                        </div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                        <div className="font-semibold">Notifications</div>
                        <div className="text-xs text-gray-300">3 new updates</div>
                        {/* Arrow */}
                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                    </div>
                </div>
            </div>
            
            {/* Bottom section */}
            <div className="mt-auto mb-6">
                <div className="relative group">
                    <div className="p-2 rounded-lg text-[#cdc1c19d] hover:bg-[#2a2727] hover:text-amber-400 transition-all duration-200 cursor-pointer">
                        <FaUsers size={24} />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                        <div className="font-semibold">Students</div>
                        <div className="text-xs text-gray-300">Manage students</div>
                        {/* Arrow */}
                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;