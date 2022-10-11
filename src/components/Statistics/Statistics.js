import React, { useContext } from 'react';
import { QuizContext } from '../layout/Main';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Statistics = () => {
    const data = useContext(QuizContext).data;
    console.log(data)
    return (
        <div>
            <h2 className='sm:text-3xl sm:font-bold text-teal-700'>Statistics</h2>
            <div className='mx-auto border-2 border-teal-200 sm:p-10 sm:m-10'>
                <LineChart className='bg-teal-200 w-48 h-28' width={500} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <Tooltip></Tooltip>

                </LineChart>
            </div>


        </div>
    );
};

export default Statistics;