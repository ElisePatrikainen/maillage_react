import React from "react";
import {PageH2Before} from "../layout/Helpers/Helpers";
import "./Professions.css";
import Image1 from "../assets/images/psycologue_dessin.PNG";

function Professions() {

    return (
        <div id="professions">
            <div className="h1-cont">
                <h1>Les métiers de la communauté Maillage</h1>
            </div>

            <div>
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
                        <button>Tous les profils</button>
                    </div>

                </div>

            </div>


            <div>
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
                        <button>Tous les profils</button>
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
