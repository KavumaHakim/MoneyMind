import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
    { name: 'Feb', Amount: 3000, },
    { name: 'Mar', Amount: 2000, },
    { name: 'Apr', Amount: 2780, },
    { name: 'May', Amount: 1890, },
    { name: 'Jun', Amount: 2390, },
    { name: 'Jan', Amount: 4000,},
];


interface ChartProps {
    title: string;
    ctype: string
}

const Chart = ({title='My Chart', ctype='Bar'}: ChartProps) => {
    return(
    <div className='pt-5 pr-5 border-1 md:w-full flex flex-col items-center border-gray-300 rounded-2xl ml-5 mr-5'>
        <h2 className='text-amber-50 text-4xl'>{title}</h2>
        <ResponsiveContainer width="100%" height={250}>
                {ctype === 'Bar' ? (
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip cursor={{fill: '#20C997'}} />
                        <Legend/>
                        <Bar type="monotone" dataKey="Amount" fill="#FF0000" />
                    </BarChart>
                ) : (
                    <LineChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip cursor={{fill: '#20C997'}} />
                        <Legend/>
                        <Line type="monotone" dataKey="Amount" fill="#FF0000" />
                    </LineChart>
                )}
        </ResponsiveContainer>
    </div>
    )
}

export default Chart;