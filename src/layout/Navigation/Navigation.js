import React from 'react';
import './Navigation.css';
import {NavLink, useLocation} from "react-router-dom";
import Logo from "../../logo.png";

const data = [
    {label: 'Nos métiers', link: '/metiers',
        children: [{
            label: 'psychiatre', link: 'psychiatre'
        }, {
            label: 'psychologue', link: './psychologue', active: true
        }, {
            label: 'art thérapeute', link: 'art-therapeute', active: true
        }, {
            label: 'ergothérapeute', link: 'ergothérapeute'
        }, {
            label: 'assistante sociale', link: 'assistante-sociale'
        }, {
            label: 'éducateur', link: 'educateur'
        }, {
            label: 'médiation artistique', link: 'mediation-artistique'
        }, {
            label: 'sport', link: 'sport'
        }, {
            label: 'langues', link: 'teacher', active: true
        }]
    },
    {label: 'Notre charte', link: '/charte'},
    {label: 'Qui sommes-nous ?', link: '/equipe'},
    {label: 'Partenaires', link: '/partenaires', disabled: true}
]

function NavigationElement(props) {
    const element = props.element;
    const updateOnPageChange = () => window.scrollTo(0, 0)
    if (!element) {
        throw new Error('Invalid navigation element.');
    }
    return (
        <NavLink to={element.link}
                 onClick={updateOnPageChange}>
            {element.label}
        </NavLink>
    );
}

class Navigation extends React.Component {
    TOP_PX = 50;
    show = false;
    _data;

    isMouseOut = false;
    isFrontPage = false;


    constructor(props) {
        super(props);
        this.isFrontPage = props.isFrontPage;
        this.state = {
            navIsTransparent: this.isTransparentValidator(),
            displayedEntry: false
        };
    }

    isTransparentValidator() {
        return this.isFrontPage && (window.scrollY < this.TOP_PX) && this.isMouseOut;
    }

    updateNavTransparentState = () => this.setState({navIsTransparent: this.isTransparentValidator()})

    componentWillMount() {
        this._data = this.formatData(data);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.updateNavTransparentState);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.updateNavTransparentState);
    }

    formatData(data) {
        if (!data) {
            return []
        }
        return data.map(
            (element) => {
                const emptyObject = {label: '', link: '', children: []};
                return Object.assign(emptyObject, element);
            }
        )
    }

    render_sub() {
        const subNavContClasses = (index) => 'nav-element-sub'
            + (index === this.state.displayedEntry ? ' displayed' : '')
            + (!this.state.navIsTransparent ? ' with-background' : '');
        const navElementClasses = 'nav-element nav-2-selected';

        return this._data.map(
            (element, index) => (
                <li className={navElementClasses}
                    onMouseEnter={() => this.setState({displayedEntry: index})}
                    onMouseLeave={() => this.setState({displayedEntry: null})}>
                    <NavigationElement element={element}/>
                    <ul className={subNavContClasses(index)}>
                        {element.children.map(
                            subElement => (<li><NavigationElement element={subElement}/></li>)
                        )}
                    </ul>
                </li>
            )
        )
    }

    render() {
        let location = useLocation();
        console.log('uuuu', location);
        return (
            <nav className={this.state.navIsTransparent ? 'transparent' : ''}
                 onMouseEnter={() => {this.isMouseOut = false; this.updateNavTransparentState();}}
                 onMouseLeave={() => {this.isMouseOut = true; this.updateNavTransparentState();}}>
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
                                {this.render_sub()}
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;
