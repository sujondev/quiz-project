import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
const Statistics = () => {
    const Alldata = useLoaderData()
    const data = Alldata.data
    console.log(data)

    return (
        <div className='container-fluid w-100'>
            <BarChart style={{ margin: '50px auto ' }} width={338} height={340} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;