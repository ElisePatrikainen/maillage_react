import React from 'react';
import './FrontPageContent.css';
import Image1 from '../assets/images/front_test.jpg';
import Card from "../layout/Cards/Card";
import {cards_data, cards_data_profiles} from "../assets/data/frontPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";
import FPProfessions from "./FPProfessions/FPProfessions";
import ProfileCards from "../layout/Cards/ProfileCards";

function FrontPageContent() {
    const history = useHistory();
    const navigate = (path) => {
        window.scrollTo(0, 0)
        history.push(path);
    };

    // todo: refactor buttons into component
    return (
        <div id="fp">

            <div id="section-1" className="fp-section">
                <div className="with-large-image">
                    <img src={Image1} alt="hero image"/>
                    <div className="text">
                        <div className="title">
                            <h1>1er réseau</h1><span> de professionnels indépendants dédié au </span>
                            <h1>handicap </h1><h1>psychique </h1>
                        </div>
                        <div id="section-1-buttons-cont">

                            <button className="rounded dark" onClick={() => navigate("argumentaire")}>
                                <FontAwesomeIcon className="icon" icon={faPlayCircle}/>Découvrir
                            </button>
                            <button className="rounded clear" onClick={() => navigate("metiers")}>
                                <FontAwesomeIcon className="icon" icon={faPlayCircle}/>Métiers
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="section-6">
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
                    <h1 className="title-with-background">Nos professionnels</h1>
                </div>
            <ProfileCards small={true}/>
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
