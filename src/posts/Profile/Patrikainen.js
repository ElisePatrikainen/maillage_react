import React from "react";
import {PageH2Before} from "../../layout/Helpers/Helpers";
import Portrait from "../../assets/images/portrait.jpeg";


function Patrikainen() {

    return (
        <div>
            <div>
                <div className="section">
                    <h1>Geraldine Patrikainen :</h1>
                    <img src={Portrait} style={{float: 'right', width: '300px'}}/>
                    <h2>
                        <PageH2Before/>
                        <span className="bold">Présentation :</span>
                    </h2>
                    <p>
                        Curieuse du monde physique et de la nature qui m'entoure, j'ai commencé mes études par
                        un cursus scientifique. J'ai obtenu un diplôme d’ingénieur en électricité nucléaire et j’ai poursuivi
                        avec une licence de biochimie à Genève.
                    </p>
                    <p>
                        Avec la maturité, je me suis tournée vers les sciences humaines et je me suis passionnée pour la
                        psychologie et la psychanalyse. Après un master de psychologie clinique et psychopathologique à
                        l’université d’Aix en Provence et une analyse personnelle, j’ai complété ma formation sur la
                        psychanalyse auprès de l’ECF (psychanalyse d’orientation Lacanienne) à la section clinique de
                        Marseille et à celle de Nice ainsi qu’à l’atelier clinique de Toulon, groupe de reflexion
                        clinique d’orientation Lacanienne.
                    </p>
                    <p>
                        J’ai eu la chance de faire mon principal stage de Master en psychiatrie (hopital Ste ANNE de
                        Toulon) .
                    </p>
                    <p>
                        J’ai ensuite travaillé rapidement dans un cadre libéral, et à temps partiel comme psychologue à
                        l’hopital, dans le secteur des soins de suite, ainsi que dans différentes associations (AAVIV
                        pour les personnes victimes d’infraction, « le moulin à paroles »une maison verte d’accueil des enfants
                        en bas âge, SOS amitié en supervision, et pour un réseau d’accompagnement des personnes atteintes de
                        cancer).
                    </p>
                    <p>
                        Depuis de nombreuses années j’exerce exclusivement en cabinet libéral où je me consacre aux
                        psychothérapies analytiques pour les adultes et les enfants, et aux psychanalyses.
                    </p>
                </div>

            </div>


        </div>
    )
}

export default Patrikainen;
