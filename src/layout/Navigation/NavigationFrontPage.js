import React from "react";
import "./NavigationFrontPage.css";
import Logo from "../../logo.png";
import { NavLink } from "react-router-dom";

const content = (
  <nav id="fp">
    <div className="mobile">
      <button>Open</button>

      <div id="mobile-nav-menu">
        <button id="nav-close">
          X
        </button>
        <span className="nav-element nav-2-selected">
          <NavLink to="/metiers">Nos métiers</NavLink>
        </span>
        <span className="nav-element">
          <NavLink to="/charte">Notre charte</NavLink>
        </span>
        <span className="nav-element">
          <NavLink to="/equipe">Qui sommes-nous ?</NavLink>
        </span>
        <span className="nav-element">
          <NavLink to="/partenaires">Associations partenaires</NavLink>
        </span>
      </div>
    </div>

    <div id="large-nav-menu" className="large">
      <span className="nav-element nav-2-selected">
          <NavLink to="/metiers">Nos métiers</NavLink>
      </span>
      <span className="nav-element">
          <NavLink to="/charte">Notre charte</NavLink>
      </span>
      <span id="nav-home" href="./index.html">
        <img className="logo" src={Logo} />
          <NavLink to="/">Maillage</NavLink>
      </span>
      <span className="nav-element">
          <NavLink to="/equipe">Qui sommes-nous ?</NavLink>
      </span>
      <span className="nav-element">
          <NavLink to="/partenaires">Associations partenaires</NavLink>
      </span>
    </div>
  </nav>
);

function NavigationFrontPage(prop) {
  return content;
}

export default NavigationFrontPage;
