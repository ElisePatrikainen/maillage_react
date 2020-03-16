import React from "react";
import { PageH2Before } from "../layout/LayoutElements";
import Cards from "../layout/Cards/Cards";
import db_data from "../assets/data/psychologists";


function Psychologists() {

    const title = "psychologues";
    const _data = db_data;

    return (
        <div>
            <div>
                <Cards title={title} details={_data}/>

                <div className="section colored-background text">
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

                <div className="section text">
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


        </div>
    )
}

export default Psychologists;
