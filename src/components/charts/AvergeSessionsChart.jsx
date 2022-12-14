import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from "prop-types";

/**
 * Component to create average session chart 
 *
 * @component
 * @example
 * [{day: 'L', sessionLength: 30}]
 * return (
 *   <AvergeSessionsChart data={props} />
 * )
 */

const AvergeSessionsChart = ({ props }) => {

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

            <LineChart width={250} height={200} data={props} margin={{ top: 50, right: 10, left: 20, bottom: 10 }} onMouseMove={mouseOverColor}>
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

AvergeSessionsChart.propTypes = {
    props : PropTypes.arrayOf(
        PropTypes.exact({
            day: PropTypes.string.isRequired,
            sessionLength : PropTypes.number.isRequired
        })
    )
};

export default AvergeSessionsChart;