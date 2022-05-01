import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <nav>
                <NavLink 
                to="/"
                //style={({isActive}) => {
                //    return isActive ? {color: "red"} : {color: "blue"};
                //}}
                className={({isActive}) => isActive ? "activeLink" : ""}
                >Accueil</NavLink>
                <NavLink 
                to="/services"
                className={({isActive}) => {
                    return isActive ? "activeLink" : "";
                }}
                >Services</NavLink>
                <NavLink 
                to="/contact"
                className={({isActive}) => {
                    return isActive ? "activeLink" : "";
                }}
                >Contact</NavLink>
            </nav>
        </div>
    )
}
