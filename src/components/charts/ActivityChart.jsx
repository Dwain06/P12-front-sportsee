import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import PropTypes from "prop-types";

/**
 * Component to create activity chart 
 *
 * @component
 * @example
 * [{day: '2020-07-01', kilogram: 80, calories: 240, dayNumber: '01'}]
 * return (
 *   <ActivityChart data={props} />
 * )
 */

const ActivityChart = ({ props }) => {

    const tooltipStyle = {
        color: "white",
        fontSize: 12,
        fontWeight: 500,
        textAlign: "center",
        background: "#FF0101",
        padding: 10
    };
    const wrapperStyle = {
        padding: 0
    };

    return (
        <div className="activity-chart">
            <h3>Activité quotidienne</h3>

            <BarChart width={800} height={300} data={props} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
                <CartesianGrid 
                    strokeDasharray="3 3" 
                    vertical={false} 
                />
                <XAxis 
                    dataKey="dayNumber" 
                    tickLine={false} 
                    axisLine={false} 
                    padding={{ right: 20 }} 
                    tickMargin={15}
                />
                <YAxis 
                    orientation={"right"} 
                    tickLine={false} 
                    axisLine={false} 
                    minTickGap={60} 
                />
                <Tooltip 
                    itemStyle={tooltipStyle} 
                    contentStyle={wrapperStyle} 
                    wrapperStyle={{ outline: "none" }} 
                    labelFormatter={() => ''} 
                    separator=""
                    formatter={
                        (value, name) => name === "Poids (kg)" ? ["kg",value] : ["Cal", value]
                    } 
                />
                <Legend 
                    width={350} 
                    iconType="circle" 
                    iconSize={7} 
                    wrapperStyle={{ top: -45, right: 0, lineHeight: '20px' }} 
                    formatter={
                        (value) => <span className="legend-format">{value}</span>
                    } 
                />
                <Bar 
                    dataKey="kilogram" 
                    name="Poids (kg)" 
                    fill="#282D30" 
                    barSize={7} 
                    radius={[10, 10, 0, 0]} 
                />
                <Bar 
                    dataKey="calories" 
                    name="Calories brûlées (Cal)" 
                    fill="#FF0101" 
                    barSize={7} 
                    radius={[10, 10, 0, 0]} 
                />
            </BarChart>

        </div>
    );
};

ActivityChart.propTypes = {
    props : PropTypes.arrayOf(
        PropTypes.exact({
            calories : PropTypes.number.isRequired,
            day: PropTypes.string.isRequired,
            dayNumber : PropTypes.string.isRequired,
            kilogram: PropTypes.number.isRequired
        })
    )
};

export default ActivityChart;