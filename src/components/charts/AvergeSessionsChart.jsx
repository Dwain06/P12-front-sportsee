import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const AvergeSessionsChart = ({ props }) => {

    const datas = props;
    const formatedDatas = datas.map(obj => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return { ...obj, day: (days[obj.day - 1]) }
    });

    const mouseOverColor = (e) => {
        let div = document.querySelector('.average-sessions-chart')
        if (e.isTooltipActive) {
          let mouseX = Math.round((e.activeCoordinate.x / div.clientWidth) * 100);
          div.style.background = `linear-gradient(90deg, #FF0101 ${mouseX}%, #E60000 ${mouseX}%)`
        } else {
            div.style = "none"
        }
    }

    return (
        <div className="average-sessions-chart">
            <h3>Durée moyenne des sessions</h3>

            <LineChart width={250} height={200} data={formatedDatas} margin={{ top: 50, right: 10, left: 20, bottom: 10 }} onMouseMove={mouseOverColor}>
                <CartesianGrid 
                    vertical={false} 
                    horizontal={false} 
                />
                <XAxis 
                    dataKey="day"  
                    axisLine={false} 
                    tickLine={false} 
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
                    cursor={false} 
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