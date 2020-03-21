import React from 'react';
import './FrontPageContent.css';
import Image1 from '../assets/images/front1bis.jpg';
import Card from "../layout/Cards/Card";
import cards_data from "../assets/data/frontPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";


const content = (
    <div>

        <div id="section-1" className="fp-section">
            <div className="with-large-image">
                <img src={Image1}/>
                <div className="text">
                    <div className="title">
                        <h1>1er réseau</h1><span> de professionnels indépendants dédié au </span>
                        <h1>handicap </h1><h1>psychique </h1>
                    </div>
                    <div id="section-1-buttons-cont">

                        <button className="dark"><FontAwesomeIcon className="icon" icon={faPlayCircle}/>Découvrir
                        </button>
                        <button className="clear"><FontAwesomeIcon className="icon" icon={faPlayCircle}/>Métiers
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="section-2" className="fp-section">
            <div className="h1-cont">
                <h1>Notre organisation</h1>
            </div>
            <div id="section-2-images">
                <div className="cards">
                    {cards_data.map((detail) => (<Card data={detail} large={true}/>))}
                </div>
            </div>
            <button className="section-button">En savoir plus</button>
        </div>

        <div id="section-3" className="fp-section">
            <div className="h1-cont">
                <h1>Notre organisation</h1>
            </div>
            <div className="with-large-image">
                <img src={Image1}/>
                <div className="text">
                    <div>Réseau de professionnels indépendants dédié au handicap psychique</div>
                    <div>Soin, aide, accompagnement : trouvez le professionnel adapté.</div>
                </div>
            </div>
            <button className="section-button">Bienvenue sur Maillage</button>
        </div>

        <footer>
            <ul>
                <li>Thérapie</li>
                <li>Accompagnement social</li>
                <li>Sport</li>
                <li>Activités culturelles</li>
            </ul>
            <ul>
                <li>Nos métiers</li>
                <li>Notre charte</li>
                <li>Qui sommes-nous ?</li>
                <li>Associations partenaires</li>
            </ul>
        </footer>
    </div>

);

function FrontPageContent() {
    return content;
}

export default FrontPageContent;
