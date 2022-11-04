import React from 'react';
import PropTypes from "prop-types";

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

Nutrients.propTypes = {
    props : PropTypes.exact({
            count : PropTypes.string.isRequired,
            img: PropTypes.string,
            name : PropTypes.string.isRequired
    })
};

export default Nutrients;