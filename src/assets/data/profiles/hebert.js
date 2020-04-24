import React from "react";
import Photo from "../../images/Geraldine-Patrikainen.jpg";

const name = (<span>Falone Hebert</span>);
const profession = (<span>Professeur Anglais</span>);
const tag = 'teacher.english';
const photo = null;
const phone = null;
const mail = null;

const presentation = (
    <div>
        <p>
            J'ai eu ma licence en Langues Étrangères Appliquées en 2012.
            Je suis actuellement enseignante pédagogique en Anglais et Français principalement.</p>
        <p>Je travaille avec des élèves de tous profils et tout âge.</p>
        <p>Plus spécifiquement, j'ai des élèves qui ont des challenges scolaires dûs à certaines difficultés
            psychologiques.</p>
        <p>En 2016, j'ai obtenu un Master en Développement Économique avec une spécialité sur le Commerce
            Équitable.</p>
        <p>J'ai pour objectif de devenir Coordinatrice ou Chef de projet dans une ONG, une association ou une
            entreprise à visée sociale.</p>
        <p>Sur le long terme, je souhaiterais mettre en place une fondation qui travaillerait sur plusieurs
            domaines qui me tiennent à coeur au travers d'antennes variées et diverses.</p>
    </div>
);

const degrees = null;

const professionalJourney = null;

// todo: function instead of listing
const hebert = {name, profession, tag, photo, phone, mail, presentation, degrees, professionalJourney};

export default hebert;
