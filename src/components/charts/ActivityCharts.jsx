import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ActivityCharts = ({ props }) => {

    const datas = props;
    const formatedDatas = datas.map(obj => {
        obj.dayNumber = obj.day.split("-")[2];
        return { ...obj, calories: (obj.calories) }
    });

    const tooltipStyle = {
        color: "white",
        fontSize: 12,
        fontWeight: 500,
        textAlign: "center",
        background: "#FF0101",
        padding: 10,
    };
    const wrapperStyle = {
        padding: 0
    };

    console.log(formatedDatas);

    return (
        <div className="activity-chart">

            <BarChart width={780} height={300} data={formatedDatas} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                <XAxis dataKey="dayNumber" tickLine={false} axisLine={false} padding={{ right: 20 }} />
                <YAxis orientation={"right"} tickLine={false} axisLine={false} minTickGap={60} />
                <Tooltip itemStyle={tooltipStyle} contentStyle={wrapperStyle} labelFormatter={() => ''} separator=""
                    formatter={(value, name) => name === "Poids (kg)" ? ["kg",value] : ["Cal", value]} />
                <Legend width={350} iconType="circle" iconSize={7} wrapperStyle={{ top: -45, right: 0, lineHeight: '20px' }} formatter={(value) => <span className="legend-format">{value}</span>} />
                <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
                <Bar dataKey="calories" name="Calories brûlées (Cal)" fill="#FF0101" barSize={7} radius={[10, 10, 0, 0]} />
            </BarChart>

        </div>
    );
};

export default ActivityCharts;