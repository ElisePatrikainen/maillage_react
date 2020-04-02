import React from 'react';
import './FrontPageContent.css';
import Image1 from '../assets/images/front_test.jpg';
import Image2 from '../assets/images/front2.jpg';
import Card from "../layout/Cards/Card";
import cards_data from "../assets/data/frontPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";

function FrontPageContent() {
    const history = useHistory();
    const navigate = (path) => history.push(path);

    const therapyProfessions = ['psychiatre', 'psychologue', 'art thérapeute', 'ergothérapeute', 'psychanalyste']
        .map((el) => (<button className="list-button">{el}</button>));
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
                        <div>Soin, aide, accompagnement</div>
                        <div>Trouvez le professionnel adapté !</div>
                    </div>
                </div>
            </div>


            <div id="section-4" className="fp-section">
                <div className="h1-cont">
                    <h1>Nos métiers</h1>
                </div>
                <div className="list-section">
                    <div className="list-container">
                        <h2>Thérapie</h2>
                        <div className="cards">
                            {therapyProfessions}
                        </div>
                        <h2>Aide et thérapie sociale :</h2>
                        <div className="cards">
                            {therapyProfessions}
                        </div>
                        <h2>Thérapie</h2>
                        <div className="cards">
                            {therapyProfessions}
                        </div>
                    </div>
                    <div className="images-container">
                        <div className="image"></div>
                        <div className="vertical-images">
                            <div className="image"></div>
                            <div className="image"></div>
                        </div>
                    </div>
                </div>
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
}

export default FrontPageContent;
