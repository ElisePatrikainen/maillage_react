import React from 'react';
import './FrontPageContent.css';
import Image1 from '../assets/images/front_test.jpg';
import Image2 from '../assets/images/front2.jpg';
import Card from "../layout/Cards/Card";
import {cards_data, cards_data_profiles} from "../assets/data/frontPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";
import FPProfessions from "./FPProfessions/FPProfessions";
import Cards from "../layout/Cards/Cards";

function FrontPageContent() {
    const history = useHistory();
    const navigate = (path) => history.push(path);

    return (
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

                            <button className="dark" onClick={() => navigate("argumentaire")}>
                                <FontAwesomeIcon className="icon" icon={faPlayCircle}/>Découvrir
                            </button>
                            <button className="clear" onClick={() => navigate("metiers")}>
                                <FontAwesomeIcon className="icon" icon={faPlayCircle}/>Métiers
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="section-2" className="fp-section">
                <div id="section-2-images">
                    <div className="cards">
                        {cards_data.map((detail) => (<Card data={detail} large={true}/>))}
                    </div>
                </div>
            </div>

            <div id="section-3" className="fp-section">
                <div className="with-large-image">
                    <img src={Image2}/>
                    <div className="text">
                        <div className="title">
                            <div>Soin, aide, accompagnement</div>
                            <span>Trouvez le</span>
                            <h1> professionnel adapté !</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div id="section-5" className="fp-section">
                <div className="h1-cont">
                    <h1>Nos professionnels</h1>
                </div>
            <Cards profiles={true} small={true} details={cards_data_profiles}/>
            </div>

            <div id="section-3" className="fp-section">
                <div className="with-large-image">
                    <img src={Image2}/>
                    <div className="text">
                        <div className="title">
                            <div>Soin, aide, accompagnement</div>
                            <span>Trouvez le</span>
                            <h1> professionnel adapté !</h1>
                        </div>
                    </div>
                </div>
            </div>

            <FPProfessions/>

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
}

export default FrontPageContent;
