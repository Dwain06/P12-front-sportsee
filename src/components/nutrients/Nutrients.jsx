import React from 'react';

const Nutrients = ({ props }) => {

    return (
        <>
            <figure>
                <img src={props.img} alt={props.name} />
                <figcaption>
                    <p className="nutrient--count">{props.count}</p>
                    <p className="nutrient--name">{props.name}</p>
                </figcaption>
            </figure>
        </>
    );
};

export default Nutrients;