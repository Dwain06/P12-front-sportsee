import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ActivityCharts = ({props}) => {

    const datas = props;
    const formatedDatas = datas.map(obj => {
        obj.dayNumber = obj.day.split("-")[2];
        return {...obj, calories: (obj.calories)}
    });

    const tooltipStyle = {
        color: "white",
        background: "#FF0101",
        padding: 5,
      };

    console.log(formatedDatas);

    return (
        <>

            <BarChart width={780} height={320} data={formatedDatas} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                
                <XAxis dataKey="dayNumber" tickLine={false}/>
                <YAxis />
                <Tooltip itemStyle={tooltipStyle} labelFormatter={() => ''} separator=""
						formatter={(value) => ['', value]} offset={50} />
                <Legend width={350} iconType="circle" iconSize={7} wrapperStyle={{ top: -20, right: 40, lineHeight: '20px' }} />
                <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]}/>
                <Bar dataKey="calories" name="Calories brûlées (Cal)" fill="#FF0101" barSize={7} radius={[10, 10, 0, 0]} />
            </BarChart>

        </>
    );
};

export default ActivityCharts;