import React from "react";
import {PageH2Before} from "../../layout/Helpers/Helpers";
import Portrait from "../../assets/images/portrait.jpeg";


function Barbier() {

    return (
        <div>
            <div>
                <div className="section">
                    <h1>Kévin Barbier :</h1>
                    <img src={Portrait} style={{float: 'right', width: '300px'}}/>
                    <h2>
                        <PageH2Before/>
                        <span className="bold">Présentation</span>
                    </h2>
                    <p>
                        Après un cursus à l’université Aix Marseille, j’ai obtenu un Master 2 en Psychopathologie
                        Clinique
                        et Psychanalyse.
                    </p>

                    <p>
                        Mes rencontres successives m’ont amené à travailler dans le secteur médico-social, dans un
                        premier
                        temps auprès d’enfants et d’adolescents polyhandicapés, où la relation humaine et la
                        communication
                        non verbale sont au premier plan. Cette expérience m’a permis de développer une capacité
                        d’observation fine, ainsi qu’une capacité d’adaptation face à des troubles complexes, là où la
                        parole ne peut advenir.
                    </p>
                    <p>
                        Depuis plusieurs années maintenant, j’exerce mon métier de psychologue dans différentes
                        structures
                        auprès de plusieurs populations.
                    </p>
                    <p>
                        D’une part en Foyer d’Accueil Médicalisé (FAM) auprès d’adultes présentant une déficience
                        intellectuelle associée à un handicap psychique (psychose, maladie génétique, épilepsie…). Dans
                        ce
                        cadre, je propose des suivis individuels, des groupes thérapeutiques, et un accompagnement des
                        professionnels de soin.
                    </p>
                    <p>
                        D’autre part en Service d’Education Spécialisé et de Soins à Domicile (SESSAD), où j’accueille
                        des
                        enfants et des adolescents scolarisés, mais également en situation de handicap psychique,
                        reconnus
                        par la Maison Départementale pour les Personnes Handicapées MDPH. Dans ce service, je propose
                        des
                        suivis psychothérapiques individuels et des ateliers thérapeutiques.
                    </p>
                    <p>
                        Enfin, j’exerce dans une maison de retraite auprès de personnes âgées dépendantes. Ici, je
                        propose
                        des soutiens individuels, j’organise des projets en collaboration avec les animatrices pour
                        maintenir une dynamique dans l’établissement, et je supervise les projets personnalisés
                        d’accompagnement.
                    </p>
                    <p>
                        Depuis le début de l’année 2019, je me suis installé en cabinet libéral, après une longue
                        réflexion,
                        afin de me consacrer aux psychothérapies individuelles et à la guidance parentale. J’accueille
                        les
                        enfants, les adolescents et les adultes.
                    </p>
                    <p>
                        Mon expérience dans le champ du handicap psychique a motivé ma participation à la création de
                        l’association « Maillage ». De plus, au vu du constat du manque de place en institution et de la
                        difficulté pour les personnes présentant ce type d’handicap de trouver un intervenant en
                        libéral,
                        j’ai souhaité offrir une possibilité de soin supplémentaire.
                    </p>

                </div>

            </div>


        </div>
    )
}

export default Barbier;
