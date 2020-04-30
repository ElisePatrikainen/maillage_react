import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";
import Logo from "../../logo.png";


class Navigation extends React.Component {
    navIsTransparent = window.scrollY < 50;
    show = false;

    constructor(props) {
        super(props);
        this.state = {
            isFrontPage: props.isFrontPage,
            navIsTransparent: props.isFrontPage && window.scrollY < 50,
            show: false
        };
    }

    isTransparentValidator() {
        return this.state.isFrontPage && window.scrollY < 50;
    }

    updateNavOnScroll = () => this.setState({navIsTransparent: window.scrollY < this.isTransparentValidator()})
    updateOnPageChange = () => window.scrollTo(0, 0)

    componentDidMount() {
        window.addEventListener("scroll", this.updateNavOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.updateNavOnScroll);
    }

    render() {
        return (
            <nav className={this.state.navIsTransparent ? 'transparent' : ''}>
                <div className="mobile">
                    <button>Open</button>

                    <div id="mobile-nav-menu">
                        <button id="nav-close">
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
          <span>Partenaires</span>
        </span>
                    </div>
                </div>

                <div id="large-nav-menu" className="large">
                    <ul>
                        <li id="nav-home">
                            <img className="logo" src={Logo}/>
                            <NavLink to="/">Maillage</NavLink>
                        </li>

                        <li id="nav-right">
                            <ul>
                                <li className={'nav-element nav-2-selected'
                                        + (this.state.navIsTransparent)}
                                    onMouseEnter={() => this.setState({show: true})}
                                    onMouseLeave={() => this.setState({show: false})}>
                                    <NavLink to="/metiers"
                                             onClick={this.updateOnPageChange}>Nos métiers</NavLink>
                                    <ul className={'nav-element-sub'
                                            + (this.state.show ? ' displayed' : '')
                                            + (!this.state.navIsTransparent ? ' with-background' : '')}>
                                        <li><span>AZAZA</span></li>
                                        <li><span>AZAZA</span></li>
                                        <li><span>AZAZA</span></li>
                                    </ul>
                                </li>
                                <li className="nav-element">
                                    <NavLink to="/charte" onClick={this.updateOnPageChange}>Notre charte</NavLink>
                                </li>

                                <li className="nav-element">
                                    <NavLink to="/equipe" onClick={this.updateOnPageChange}>Qui sommes-nous ?</NavLink>
                                </li>
                                <li className="nav-element">
                                    <NavLink to="/partenaires" onClick={this.updateOnPageChange}>Partenaires</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;
