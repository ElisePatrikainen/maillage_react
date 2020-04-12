import React from "react";

const name = (<span>Céline Foucault</span>);
const phone = (<span>06 XX XX XX XX</span>);
const mail = (<span>foucault@xxx.com</span>);

const presentation = (
    <div>
        <p>J’exerce mon métier de psychologue clinicienne et de psychothérapeutique orienté essentiellement
            par la psychanalyse lacanienne depuis 2002.
        </p>
        <p>Je travaille en cabinet libéral depuis une quinzaine d’années. Dans ce cadre je m’adresse à un
            public d’adultes et d’adolescents. Mes domaines d’interventions concernent les épreuves de la
            vie tels que la séparation, le deuil, le trauma, …. et les états qui y sont associés :
            dépression, troubles anxieux, confusion mentale…
        </p>
        <p>
            Je propose des psychothérapies analytique mais aussi de l’accompagnement psychologique ou un
            soutien psychologique ponctuel. Ma pratique s’effectue en individuel, elle est parfois
            familiale.
        </p>
        <p>
            La singularité de chacune des personnes que je reçois est au cœur de ma pratique
            professionnelle. De plus, mon expérience de travail me conforte tout d’abord dans l’idée que la
            parole du consultant, adressée et déposée au psychologue produit des effets thérapeutiques, elle
            vient l’apaiser, le soulager et le libère de sa charge mentale. D’autre part, je conçois mon
            travail de psychologue et psychothérapeute comme un travail de co-création et de co-construction
            où l’engagement est fondamental et se doit d’être réciproque.
        </p>
        <p>
            Par ailleurs, j’exerce mes fonctions dans le milieu associatif depuis une 20aine d’années auprès
            de personnes en situation de précarité où je suis amenée à occuper mes fonctions auprès de
            personnes en situation de handicap psychique et mental et quelquefois associé à des
            problématiques somatiques et /ou physiques ( maladie, handicap... ). J’occupe également mes
            fonctions auprès d’un public migrant depuis plusieurs années, animée par l’approche
            transculturelle. Dans ce cadre, mon approche est individuelle mais aussi collective. J’anime des
            groupes d’expression, des petits déjeuner de discussion sur la santé, des ateliers autour de
            l’estime de soi, j’effectue des accompagnements psychologiques de personnes en randonnées
            pédestres…
        </p>
    </div>
);

const degrees = (
    <ul>
        <li>Master 2 en psychologie clinique et psychopathologie de l’université Paris 13</li>
        <li>Master 2 recherche : « liens sociaux / liens symboliques -option psychanalyse » de
            l’université Paul
            Valery Montpellier
        </li>
        <li>Formation Universitaire en Analyse des pratiques Professionnelle faculté de psychologie Lyon
            2
        </li>
        <li>Diplôme Universitaire en éducation à la santé option Santé des adolescents et des jeunes -
            école de santé publique de Nancy.
        </li>
    </ul>
);

const professionalJourney = (
    <div>
        <p>
            En parallèle à ma pratique professionnelle en cabinet, j’ai exercé occasionnellement une
            fonction de formatrice dans le champ de la psychopathologie, mais aussi une fonction
            d’intervenante en analyse des pratiques professionnelle auprès de personnels du champ social et
            culturel, et ce, auprès de diverses institutions ( association culturelle, centre départemental
            de l’enfance, ministère de la justice, sauvegarde de l’enfance).
        </p>
        <p>
            Outre ma pratique professionnelle de psychologue clinicienne et de psychothérapeute, J’ai occupé
            une fonction de conseillère en insertion sociale et professionnelle auprès d’un public de jeunes
            de 16 à 26 ans au sein d’ une Mission Locale durant 5 ans.
        </p>
        <p>
            J’ai également travaillé durant une dizaine d’années dans le champ de l’animation dans des
            centres de vacances et de loisirs.
        </p>
        <p>
            Enfin, durant deux années, j’ai été correspondance de presse pour le journal local (Var matin
            puis Nice Matin)
        </p>
    </div>
);

const foucault = {name, phone, mail, presentation, degrees, professionalJourney};
export default foucault;
