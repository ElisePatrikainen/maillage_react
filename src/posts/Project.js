import React from "react";
import {PageH2Before} from "../layout/Helpers/Helpers";

function Project() {

    return (
        <div>

            <div>

                <div className="section text">
                    <h1>Le projet</h1>
                    <h2>
                        <PageH2Before/>
                        Un réseau de professionnels<span className="bold"> indépendants</span> :
                    </h2>
                    <p>
                        Le projet de l’association MAILLAGE est né de multiples discussions avec différents
                        professionnels du soin en cabinet libéral, au sujet de la prise en charge des personnes en
                        situation de Handicap psychique, en ville. Nous avons partagé nos difficultés et nos réussites.
                        Nous avons confronté notre expérience de la pratique clinique en ville et celle que certains
                        avaient déjà acquise au sein de différentes institutions. Une réflexion s’est engagée
                        naturellement, non seulement sur les différents aspects de nos professions respectives, mais
                        surtout sur les difficultés que peuvent rencontrer les patients et leurs aidants à se repérer
                        dans les offres de soin en ville. En effet celles-ci sont multiples, parfois peu connues des
                        personnes en demande, et logiquement peu liées entre elles, contrairement à ce qui est mis en
                        place en institution.
                    </p>
                </div>

                <div className="section colored-background text">
                    <h2>
                        <PageH2Before/>
                        Notre projet<span className="bold"> consiste</span> :
                    </h2>
                    <p>
                        A offrir une présentation rapide de différentes professions susceptibles d’être utiles à une
                        prise en charge au cas par cas, de personnes en situation de handicap psychique.
                    </p>
                    <p>
                        A faciliter le contact vers les professionnels indépendants exerçant en ville. Les membres de
                        MAILLAGE sont tous garants de leur pratique et de leur orientation, mais celles ci ont pour
                        point commun d’être basées sur une écoute et une prise en compte bienveillante et sans jugement
                        de ce qu’exprime le patient, de s’efforcer de respecter les singularités d’un patient, de tenir
                        compte de ses difficultés et s’appuyer sur ses ressources pour l’accompagner.
                    </p>
                    <p>
                        L’objectif global de cette association de professionnels est de soutenir et accompagner l’effort
                        vers le mieux- être des personnes ayant un handicap psychique, dans un contexte de vie et de
                        consultation en ville, en alternative ou en complément de la prise en charge institutionnelle.
                    </p>
                    <p>
                        Ce regroupement de professionnels favorise également une réflexion interdisciplinaire, riche de
                        nos différentes pratiques professionnelles et de nos expériences diverses au sujet de la prise
                        en charge du handicap psychique en ville.
                    </p>
                </div>

            </div>


        </div>
    )
}

export default Project;
