import React from "react";
import {PageH2Before} from "../layout/Helpers/Helpers";
import "./Professions.css";
import Image1 from "../assets/images/psycologue_dessin.PNG";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";

function Professions() {

    const history = useHistory();
    const navigate = (path) => history.push(path);

    return (
        <div id="professions">
            <div className="h1-cont">
                <h1>Les métiers de la communauté Maillage</h1>
            </div>

            <div className="section">
                <h2>
                    <PageH2Before/>
                    Le<span className="bold"> psychologue</span>
                </h2>
                <div className="section-content">
                    <div className="section-image">
                        <img src={Image1}/>
                    </div>
                    <div className="section-text">
                        Le psychologue est spécialisé dans l’étude et la compréhension du
                        fonctionnement psychique des personnes, dans ses aspects affectifs,
                        cognitifs, sociaux. Il existe dons des spécialisations en
                        psychologie : psychologie cognitive, psychologie sociale, du
                        développement, du travail ect..
                        <button className="rounded" onClick={() => navigate("psychologue")}>
                            <FontAwesomeIcon className="icon" icon={faPlusCircle}/>En savoir plus
                        </button>
                    </div>

                </div>

            </div>


            <div className="section">
                <h2>
                    <PageH2Before/>
                    L'<span className="bold">art thérapeute</span>
                </h2>
                <div className="section-content">
                    <div className="section-text">
                        Le psychologue est spécialisé dans l’étude et la compréhension du
                        fonctionnement psychique des personnes, dans ses aspects affectifs,
                        cognitifs, sociaux. Il existe dons des spécialisations en
                        psychologie : psychologie cognitive, psychologie sociale, du
                        développement, du travail ect..
                        <button className="rounded" onClick={() => navigate("art-therapeuthe")}>
                            <FontAwesomeIcon className="icon" icon={faPlusCircle}/>En savoir plus
                        </button>
                    </div>
                    <div className="section-image">
                        <img src={Image1}/>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Professions;
