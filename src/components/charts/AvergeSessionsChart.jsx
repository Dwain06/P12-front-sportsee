import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const AvergeSessionsChart = ({ props }) => {

    const datas = props;
    const formatedDatas = datas.map(obj => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return { ...obj, day: (days[obj.day - 1]) }
    });

    return (
        <div className="average-sessions-chart">
            <LineChart width={250} height={250} data={formatedDatas} >
                <CartesianGrid 
                    vertical={false} 
                    horizontal={false} 
                />
                <XAxis 
                    dataKey="day"  
                    axisLine={false} 
                    tickLine={false} 
                    padding={{ left: 6 }}
                    tickMargin={20}
                    tick={{ fill: "white", fillOpacity: "0.5" }}
                />
                <YAxis 
                    dataKey="sessionLength" 
                    axisLine={false} 
                    tickLine={false} 
                    hide={true}
                />
                <Tooltip 
                    itemStyle={{ fontSize: 12, color: "#000" }} 
                    wrapperStyle={{ outline: "none" }} 
                    labelFormatter={() => ''} 
                    separator="" 
                    formatter={(value) => [" min", value]} 
                />
                <Legend wrapperStyle={{opacity: 0}} />
                <Line 
                    type="monotone" 
                    dataKey="sessionLength" 
                    stroke="white" 
                    activeDot={{ r: 6 }} 
                    dot={false} 
                    fill="#FFFFFF" 
                />
            </LineChart>
        </div>
    );
};

export default AvergeSessionsChart;