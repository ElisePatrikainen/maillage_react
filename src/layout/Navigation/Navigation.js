import React from 'react';
import './Navigation.css';

const content = (
  <nav>
    <div className="mobile">
      <button onclick="openNavMenu()">Open</button>

      <div id="mobile-nav-menu">
        <button id="nav-close" onclick="closeNavMenu()">
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
      <a id="nav-home" href="./index.html">
        <img className="logo" src="logo.png" />
        <span>Maillage</span>
      </a>

      <div>
        <a className="nav-element nav-2-selected">
          <span>Nos métiers</span>
        </a>
        <a className="nav-element">
          <span>Notre charte</span>
        </a>

        <a className="nav-element">
          <span>Qui sommes-nous ?</span>
        </a>
        <a className="nav-element">
          <span>Associations partenaires</span>
        </a>
      </div>
    </div>
  </nav>
);

function Navigation(prop) {
    return content;
}

export default Navigation;