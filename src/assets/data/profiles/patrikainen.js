import React from "react";
import Photo from "../../images/Geraldine-Patrikainen.jpg";

const name = (<span>Géraldine Patrikainen</span>);
const profession = (<span>Psychologue - psychanalyste</span>);
const photo = Photo;
const phone = (<span>06 62 60 52 29</span>);
const mail = (<span>geraldine.patrikainen@gmail.com</span>);
// todo: add website, linkedIn

const presentation = (
    <div>
        <p>Psychologue clinicienne et psychanalyste en cabinet libéral à Toulon depuis de nombreuses années, j’exerce
            auprès des adultes, des adolescents et des enfants. Ma pratique est orientée par les concepts théoriques
            Freudiens et Lacaniens, et j’accompagne chaque personne en m’adaptant à sa singularité et à sa problématique
            particulière. En effet les psychothérapies et les accompagnements psychologiques basés sur des concepts
            psychanalytiques privilégient l’écoute et l’ajustement au cas par cas à la singularité de la personne en
            souffrance. Ma pratique s’étend donc de l’accompagnement psychologique ponctuel, à la psychothérapie
            d’orientation psychanalytique, jusqu’à la cure psychanalytique classique.</p>
        <p>Mon expérience professionnelle en libéral a été complétée par un travail en milieu hospitalier, auprès de
            patients en « soins de suite ». Parallèlement, j’ai participé plusieurs années à un réseau d’accompagnement
            psychologique pour les personnes atteintes de cancer et pour leurs proches.</p>
        <p>J’ai eu l’opportunité de travailler également en milieu associatif, pour l’accompagnement psychologique des
            personnes victimes de violences et d’infractions.</p>
        <p>En ce qui concerne ma pratique avec les enfants, j’ai participé pendant de nombreuses années à l’accueil des
            tous petits avec leur parents, au Moulin à Paroles, à la Seyne-sur-Mer. Le « Moulin à Paroles » est un lieu
            de
            détente et de socialisation qui reçoit de jeunes enfants accompagnés d’un parent, pour des temps libres de
            jeu
            et de rencontre avec d’autres enfants et adultes, selon le principe de la « maison verte » crée par
            Françoise
            Dolto. C’est un endroit ludique d’expression et un espace de paroles pour petits et grands, dans un cadre
            d’écoute bienveillante.</p>
        <p>Actuellement je suis présidente bénévole de cette association.</p>
    </div>
);

// todo: format CV style
const degrees = (
    <ul>
        <li>
            2006: Université d'Aix Marseille, Master de psychologie clinique et psychopathologie
        </li>
        <li>1986: Université des Sciences de Genève, Licence Biochimie</li>
        <li>1984: Ecole d' Ingénieur de Genève, Ingénieur Electricité Nucléaire</li>
    </ul>
);

const professionalJourney = (
    <div>
        <p>
            Curieuse du monde physique et de la nature qui m'entoure, j'ai commencé mes études par un cursus
            scientifique.
            J'ai obtenu un diplôme d’ingénieur en électricité nucléaire et j’ai poursuivi avec une licence de biochimie
            à
            Genève.</p>
        <p>Avec la maturité, je me suis tournée vers les sciences humaines et je me suis passionnée pour la psychologie
            et
            la psychanalyse. J’ai eu l’opportunité de réaliser mon long stage de Master en psychiatrie, à l’hôpital Ste
            ANNE
            de Toulon. Après le master de psychologie clinique et psychopathologique à l’université d’Aix en Provence et
            une
            analyse personnelle, j’ai complété ma formation sur la psychanalyse auprès de l’ECF (psychanalyse
            d’orientation
            Lacanienne) à la section clinique de Marseille, puis à celle de Nice. Je participe à l’atelier clinique de
            Toulon, groupe de réflexion clinique d’orientation Lacanienne.</p>
        <p>Pour compléter ces informations, mon site est disponible sous
            psychologie-toulon.fr et mon CV sur linkedin.</p>
    </div>
);

// todo: function instead of listing
const patrikainen = {name, profession, photo, phone, mail, presentation, degrees, professionalJourney};

export default patrikainen;
