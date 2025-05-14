import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
    { name: 'Jun', uv: 2390, pv: 3800 },
    { name: 'Jan', uv: 4000, pv: 2400 },
];


const Chart = () => {
    return(
    <div className='pt-5 pr-5 border-1 md:w-[20%] flex items-center border-gray-300 rounded-2xl ml-5 mr-5'>
        <h2></h2>
        <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Bar type="monotone" dataKey="uv" stroke="#82ca9d" />
                </BarChart>
        </ResponsiveContainer>
    </div>
    )
}

export default Chart;