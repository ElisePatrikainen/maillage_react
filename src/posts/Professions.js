import React from "react";
import {PageH2Before} from "../layout/Helpers/Helpers";
import "./Professions.css";
import Image1 from "../assets/images/psycologue_dessin.PNG";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";

function ProfessionsContent() {

    // todo: mutualize
    const history = useHistory();
    const navigate = (path) => {
        window.scrollTo(0, 0)
        history.push(path);
    }

    return (
        <div id="professions">
            <div className="section-content">
                <h2>
                    <PageH2Before/>
                    Le<span className="bold"> psychologue</span>
                </h2>
                <div className="section-text">
                    Le psychologue est spécialisé dans l’étude et la compréhension du
                    fonctionnement psychique des personnes, dans ses aspects affectifs,
                    cognitifs, sociaux. Il existe dons des spécialisations en psychologie :
                    psychologie cognitive, psychologie sociale, du développement, du
                    travail ect..La psychologie clinique comprend l’étude des
                    psychopathologies et s’occupe particulièrement des psychothérapies.
                    <button className="rounded" onClick={() => navigate("psychologue")}>
                        <FontAwesomeIcon className="icon" icon={faPlusCircle}/>En savoir plus
                    </button>
                </div>

            </div>

            <div className="section-content">
                <h2>
                    <PageH2Before/>
                    L'<span className="bold">art-thérapeute</span>
                </h2>
                <div className="section-text">
                    Utilisée dans le champ du soin et de la prévention, l'Art-thérapie est une méthode qui
                    consiste à créer les conditions favorables à l'expression et au dépassement des difficultés
                    personnelles par le biais d'une stimulation des capacités créatrices.Elle trouve sa place
                    dans des troubles dépressifs et psychosomatiques, des pathologies plus sévères comme les
                    psychoses et l'autisme et aussi les démences séniles.
                    <button className="rounded" onClick={() => navigate("therapeute")}>
                        <FontAwesomeIcon className="icon" icon={faPlusCircle}/>En savoir plus
                    </button>
                </div>

            </div>

        </div>
    )
}

// todo: refactor with a 'body page'
function Professions() {

    return (
        <div className="section">
                <h1>Les métiers de la communauté Maillage</h1>
            <ProfessionsContent/>

        </div>
    )
}

export {ProfessionsContent, Professions}
