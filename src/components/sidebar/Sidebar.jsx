import React from 'react';

import icon_yoga from "../../assets/icons/sidebar/icon_yoga.png";
import icon_swim from "../../assets/icons/sidebar/icon_swim.png";
import icon_bike from "../../assets/icons/sidebar/icon_bike.png";
import icon_bodybuilding from "../../assets/icons/sidebar/icon_bodybuilding.png";

const sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__icons">
                <img src={icon_yoga} alt="icon yoga" />
                <img src={icon_swim} alt="icon swim" />
                <img src={icon_bike} alt="icon bike" />
                <img src={icon_bodybuilding} alt="icon bodybuilding" />
            </div>
            <div className="sidebar__copyright">
                Copiryght, SportSee 2020
            </div>
        </div>
    );
};

export default sidebar;