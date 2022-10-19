import React from 'react';

import calorieCount from "../../assets/icons/nutrients/calorieCount.png";
import proteinCount from "../../assets/icons/nutrients/proteinCount.png";
import carbohydrateCount from "../../assets/icons/nutrients/carbohydrateCount.png";
import lipidCount from "../../assets/icons/nutrients/lipidCount.png";

const Nutrients = ({ props }) => {
    let img;
    if (props.img === "calorieCount") img = calorieCount;
    if (props.img === "proteinCount") img = proteinCount;
    if (props.img === "carbohydrateCount") img = carbohydrateCount;
    if (props.img === "lipidCount") img = lipidCount;

    return (
        <>
            <figure>
                <img src={img} alt={props.name} />
                <figcaption>
                    <p className="nutrient--count">{props.count}</p>
                    <p className="nutrient--name">{props.name}</p>
                </figcaption>
            </figure>
        </>
    );
};

export default Nutrients;