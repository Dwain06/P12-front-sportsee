import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';


const PerformanceChart = ({ props }) => {

    return (
        <div className="performance-chart">

            <RadarChart outerRadius={90} width={255} height={250} data={props}>
                <PolarGrid />
                <PolarAngleAxis 
                    dataKey="kind" 
                    tick={{ fill: "white", fillOpacity: "0.9" }}
                    fontSize={9}
                    
                />
                <PolarRadiusAxis 
                    style={{opacity: 0}}
                />
                <Radar 
                    dataKey="value" 
                    stroke="#FF0101" 
                    fill="#FF0101" 
                    fillOpacity={0.6} 
                />
                <Legend
                    wrapperStyle={{opacity: 0}}
                />
            </RadarChart>
        </div>
    );
};

export default PerformanceChart;