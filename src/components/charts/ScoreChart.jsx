import React from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';
import PropTypes from "prop-types";

const ScoreChart = ({ props }) => {

    return (
        <div className="score-chart">
            <h3>Score</h3>
            <p className="score-chart__percentage"><span className="percentage--number">{props[0].score}%</span><br/>de votre<br/>objectif</p>

            <RadialBarChart width={260} height={250} innerRadius="70%" outerRadius="80%" data={props} startAngle={180} endAngle={-180} >
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
            </RadialBarChart>
        </div>
    );
};

ScoreChart.propTypes = {
    props : PropTypes.arrayOf(
        PropTypes.exact({
            score : PropTypes.number.isRequired
        })
    )
};

export default ScoreChart;