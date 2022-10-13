import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo_sportsee from "../../assets/logo/logo_sportsee.png";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                    <Link to="/">
                    <img src={logo_sportsee} alt="logo SportSee" />
                    </Link>
                </div>
                <div className="navigation">
                    <ul>
                        <NavLink to="/profil">
                            <li>Accueil</li>
                        </NavLink>
                        <NavLink to="/profil" className="nav-active">
                            <li>Profil</li>
                        </NavLink>
                        <NavLink to="/profil#">
                            <li>Réglages</li>
                        </NavLink>
                        <NavLink to="/profil#">
                            <li>Communauté</li>
                        </NavLink>
                    </ul>
                </div>
        </nav>
    );
};

export default Navbar;