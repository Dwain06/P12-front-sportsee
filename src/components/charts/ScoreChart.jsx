import React from 'react';
import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, Tooltip } from 'recharts';


const ScoreChart = ({ props }) => {

    const datas = props;
    
    const formatedDatas = datas ? [{score : datas*100}] : [{score : 0}];

    return (
        <div className="score-chart">
            <h3>Score</h3>
            <p className="score-chart__percentage"><span className="percentage--number">{formatedDatas[0]["score"]}%</span><br/>de votre<br/>objectif</p>

            <RadialBarChart width={260} height={250} innerRadius="70%" outerRadius="80%" data={formatedDatas} startAngle={180} endAngle={-180} >
                <RadialBar 
                    dataKey='score' 
                    cornerRadius={30 / 2}
                    fill="#FF0101"
                />
                <PolarAngleAxis 
                    type="number" 
                    domain={[0, 100]} 
                    tick={false} 
                />
                <Tooltip />
            </RadialBarChart>
        </div>
    );
};

export default ScoreChart;