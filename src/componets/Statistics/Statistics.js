import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const Alldata = useLoaderData()
    const data = Alldata.data
    console.log(data)

    return (
        <div>
            <BarChart className='chart' width={350} height={340} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;