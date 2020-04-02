import React from "react";
import {PageH2Before} from "../layout/Helpers/Helpers";

function Network() {

    return (
        <div>
            <div>

                <div className="section colored-background text">
                    <h2>
                        <PageH2Before/>
                        Un réseau de professionnels<span className="bold"> indépendants</span> :
                    </h2>
                    <p>
                        Le projet de l’association MAILLAGE est né de multiples discussions et réflexions entre
                        différents professionnels du soin en cabinet libéral, au sujet de la prise en charges de
                        personnes en situation de Handicap psychique, en ville.
                        Nous avons partagé nos difficultés et nos réussites. Nous avons confronté notre expérience de la
                        pratique clinique en ville et celle que certains avaient déjà au sein de différentes
                        institutions.
                        Le réseau permet aux patients et aux aidants de se repérer dans les différentes professions et
                        de mieux connaitre les membres de l’association ayant signé la charte de Maillage.
                    </p>
                </div>

                <div className="section text">
                    <h2>
                        <PageH2Before/>
                        Une<span className="bold"> association</span> :
                    </h2>
                    <p>
                        L’association MAILLAGE favorise un cadre de rencontres trimestrielles pour permettre aux
                        professionnels en ville et aux accompagnants de créer un lien de réflexion et de travail sur le
                        Handicap psychique.
                        Une réflexion s’engage ainsi naturellement, non seulement sur les différents aspects de nos
                        professions respectives mais aussi sur les difficultés que peuvent rencontrer les patients et
                        leurs aidants et les solutions susceptibles d’être mises en place. Différents axes de réflexion
                        sont abordés, comme par exemple ; Comment améliorer l’offre de soin et d’accompagnement ?
                        Comment offrir un minimum de contenance et de cohérence dans les prises en charge en ville ?
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Network;
