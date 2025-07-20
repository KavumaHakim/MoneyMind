import { useEffect, useState } from "react";
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
import useStudents from "../Hooks/useStudents";

interface Stats {
    total: number;
    totalAmount: number;
    averageAmount: number;
    byClass: Record<string, number>;
    byStream: Record<string, number>;
}

const Dashboard = () => {
    const { students, loading, getStatistics } = useStudents();
    const [stats, setStats] = useState<Stats | null>(null);

    useEffect(() => {
        const loadStats = async () => {
            const result = await getStatistics();
            if (result.success && result.data) {
                setStats(result.data);
            }
        };

        if (students.length > 0) {
            loadStats();
        }
    }, [students, getStatistics]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US').format(amount);
    };

    return (
        <div className="flex bg-[#080808] w-full">
            <Sidebar/>
            {/* Main content container */}
            <main className="dashboard-content flex-1 overflow-y-auto flex flex-col gap-5">
                <Heading />
                <h1 className="text-3xl font-bold text-red-600 ml-5">Dashboard</h1>
                    <section className="flex bg-[#202020] gap-4 flex-wrap pt-1.5 pb-1.5 items-center mt-4 rounded-2xl w-[95%] md:flex-nowrap pl-1.5 pr-1.5 justify-center self-center">
                        <InfoCard 
                            cardName="Total Amount" 
                            icon={GiReceiveMoney} 
                            value={stats ? formatCurrency(stats.totalAmount) : "Loading..."} 
                            isCurrency={true}
                            loading={loading}
                        />
                        <InfoCard 
                            cardName="Average" 
                            icon={MdAttachMoney} 
                            value={stats ? formatCurrency(Math.round(stats.averageAmount)) : "Loading..."} 
                            isCurrency={true}
                            loading={loading}
                        />
                        <InfoCard 
                            cardName="Students" 
                            icon={FaUserAlt} 
                            value={stats ? stats.total.toString() : "Loading..."} 
                            isCurrency={false}
                            loading={loading}
                        />
                        <InfoCard 
                            cardName="Classes" 
                            icon={MdAccountBalanceWallet} 
                            value={stats ? Object.keys(stats.byClass).length.toString() : "Loading..."} 
                            isCurrency={false}
                            loading={loading}
                        />
                        <InfoCard 
                            cardName="Streams" 
                            icon={GrTransaction} 
                            value={stats ? Object.keys(stats.byStream).length.toString() : "Loading..."} 
                            isCurrency={false}
                            loading={loading}
                        />
                    </section>
                    
                    {/* Class and Stream breakdown */}
                    {stats && (
                        <section className="flex gap-4 flex-wrap w-[95%] self-center">
                            <div className="bg-[#202020] rounded-2xl p-4 flex-1 min-w-[300px]">
                                <h3 className="text-xl font-semibold text-white mb-3">Students by Class</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(stats.byClass).map(([className, count]) => (
                                        <div key={className} className="flex justify-between bg-[#080808] p-2 rounded">
                                            <span className="text-white uppercase">{className}</span>
                                            <span className="text-amber-400 font-semibold">{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-[#202020] rounded-2xl p-4 flex-1 min-w-[300px]">
                                <h3 className="text-xl font-semibold text-white mb-3">Students by Stream</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(stats.byStream).map(([streamName, count]) => (
                                        <div key={streamName} className="flex justify-between bg-[#080808] p-2 rounded">
                                            <span className="text-white capitalize">{streamName}</span>
                                            <span className="text-amber-400 font-semibold">{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    <div className="flex justify-evenly gap-1.5 flex-nowrap flex-col md:flex-row">
                        <Chart title="Students by Class" ctype='Line'/>
                        <Chart title="Amount Distribution" ctype="Bar"/>
                        <Chart title="Stream Analysis" ctype="Bar" />
                    </div>
                    <StudentTable />
            </main>
        </div>
        )
}

type InfoCardProps = {
    cardName: string;
    icon: IconType;
    value: string;
    isCurrency: boolean;
    loading?: boolean;
};

const InfoCard = ({ cardName, icon, value, isCurrency = true, loading = false }: InfoCardProps) => {
    const Icon = icon;
    return (
        <div className="h-35 bg-black rounded-2xl w-full flex p-2 flex-col">
            <Icon size={30} className="text-amber-400" />
            <h2 className="text-2xl text-white mt-4">{cardName || "N/A"}</h2>
            <p className="text-white">
                {loading ? (
                    <span className="animate-pulse">Loading...</span>
                ) : (
                    <>
                        {isCurrency ? 'UGX ' : ""}{value}
                    </>
                )}
            </p>
        </div>
    );
};

export default Dashboard;