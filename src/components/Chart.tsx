import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Feb', uv: 3000, pv: 139 },
    { name: 'Mar', uv: 2000, pv: 980 },
    { name: 'Apr', uv: 2780, pv: 390 },
    { name: 'May', uv: 1890, pv: 480 },
    { name: 'Jun', uv: 2390, pv: 380 },
    { name: 'Jan', uv: 4000, pv: 240 },
];


const Chart = () => {
    return(
    <div className='pt-5 pr-5 border-1 md:w-full flex flex-col items-center border-gray-300 rounded-2xl ml-5 mr-5'>
        <h2 className='text-amber-50 text-4xl'>Title</h2>
        <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend/>
                    <Bar type="monotone" dataKey="pv" stroke="#8884d8" />
                </BarChart>
        </ResponsiveContainer>
    </div>
    )
}

export default Chart;