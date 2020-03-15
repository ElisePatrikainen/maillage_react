import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";
import Logo from "../../logo.png";

const content = (
    <nav>
        <div className="mobile">
            <button onClick="openNavMenu()">Open</button>

            <div id="mobile-nav-menu">
                <button id="nav-close" onClick="closeNavMenu()">
                    X
                </button>
                <span className="nav-element nav-2-selected">
          <span>Nos métiers</span>
        </span>
                <span className="nav-element">
          <span>Notre charte</span>
        </span>
                <span className="nav-element">
          <span>Qui sommes-nous ?</span>
        </span>
                <span className="nav-element">
          <span>Associations partenaires</span>
        </span>
            </div>
        </div>

        <div id="large-nav-menu" className="large">
            <ul>
                <li id="nav-home">
                    <img className="logo" src={Logo}/>
                    <NavLink to="/">Maillage</NavLink>
                </li>

                <li>
                    <ul>
                        <li className="nav-element nav-2-selected">
                            <NavLink to="/metiers">Nos métiers</NavLink>
                        </li>
                        <li className="nav-element">
                            <NavLink to="/charte">Notre charte</NavLink>
                        </li>

                        <li className="nav-element">
                            <NavLink to="/equipe">Qui sommes-nous ?</NavLink>
                        </li>
                        <li className="nav-element">
                            <NavLink to="/partenaires">Associations partenaires</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
);

function Navigation(prop) {
    return content;
}

export default Navigation;
