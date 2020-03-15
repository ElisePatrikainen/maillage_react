import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import { PageH2Before } from "../layout/LayoutElements";

const content = (
    <div>
        <div>
            <div className="section white-background text">
                <h1>Le psychologue</h1>
                <h2>
                    <span className="before-title"><PageH2Before/></span>Qu'est-ce qu'un
                    <span className="bold"> psychologue</span> ?
                </h2>
                <p>
                    L’usage du titre professionnel de psychologue est réglementé en
                    France. Il requiert une formation universitaire théorique et
                    pratique en stages pour obtenir un Master 2 universitaire en
                    psychologie, soit une formation d’environ 5 ans.
                </p>
                <p>
                    Le psychologue est spécialisé dans l’étude et la compréhension du
                    fonctionnement psychique des personnes, dans ses aspects affectifs,
                    cognitifs, sociaux. Il existe dons des spécialisations en
                    psychologie : psychologie cognitive, psychologie sociale, du
                    développement, du travail ect..La psychologie clinique comprend
                    l’étude des psychopathologies et s’occupe particulièrement des
                    psychothérapies.
                </p>
                <p>
                    Le seul professionnel habilité à faire passer des tests (test
                    projectifs, tests de QI ou autres) est le psychologue. Par contre,
                    le psychologue n’étant pas médecin, il ne peut pas prescrire de
                    médicament.
                </p>
            </div>

            <div className="section colored-background text">
                <h2>
                    <span className="before-title"><PageH2Before/></span>Le psychologue
                    <span className="bold"> clinicien</span> :
                </h2>
                <p>
                    Les études de psychologie comprennent des spécialisations
                    différentes.
                </p>
                <p>
                    La « psychologie et psychopathologie clinique » est une spécialité
                    de la psychologie qui centre ses connaissances sur le psychisme
                    singulier de la personne, son évolution, sur les différentes
                    psychopathologies, ainsi que sur différents paradigmes de
                    psychothérapie.
                </p>
                <p>
                    Les psychothérapies que le psychologue clinicien propose s’appuient
                    sur différentes méthodes d’analyse basées sur des approches
                    théoriques variées. Les types de psychothérapies mises en œuvre
                    relèvent du choix du psychologue.
                </p>
                <p>
                    La « psychothérapie analytique » a cette particularité d’être fondée
                    sur l’expression libre de la personne, et de tenir compte des
                    productions de l’inconscient (lapsus, actes manqués, rêves ) pour
                    repérer et analyser les conflits psychiques sous- jacents.
                </p>
            </div>
        </div>

        <div className="section white-background">
            <h2>
                <span className="before-title bold"><PageH2Before/></span>Les psychologues
                <span className="bold"> Maillage</span> :
            </h2>
            <div className="cards">
                <div className="card">
                    <div className="title">
                        <img src="./images/lacan.jpg"/>
                        <h3>J. Lacan</h3>
                    </div>
                    <p>
                        Jacques Lacan, de son nom complet Jacques-Marie Émile Lacan est un
                        psychanalyste français. La thèse de doctorat en psychiatrie qu'il
                        soutient en 1932 reflète en partie l'influence des surréalistes
                        qu'il fréquente. En analyse avec Rudolph Loewenstein...
                    </p>
                </div>

                <div className="card">
                    <div className="title">
                        <img src="./images/lacan.jpg"/>
                        <h3>J. Lacan</h3>
                    </div>
                    <p>
                        Jacques Lacan, de son nom complet Jacques-Marie Émile Lacan est un
                        psychanalyste français. La thèse de doctorat en psychiatrie qu'il
                        soutient en 1932 reflète en partie l'influence des surréalistes
                        qu'il fréquente. En analyse avec Rudolph Loewenstein...
                    </p>
                </div>

            </div>

            <button>Voir plus</button>
        </div>

    </div>

);

function Psychologue() {
    return content;
}

export default Psychologue;
