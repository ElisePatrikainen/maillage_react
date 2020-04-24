import React from "react";
import Photo from "../../images/Geraldine-Patrikainen.jpg";

const name = (<span>Valérie Baudot Lecardinal</span>);
const profession = (<span>Art-thérapeute</span>);
const tag = 'art-therapist';
const photo = null;
const phone = null;
const mail = null;

const presentation = (
    <div>
        <p>Après des études universitaires en langues étrangères et sciences du langage, j'ai d'abord travaillé dans
            l'audiovisuel à Paris puis repris des études aux Beaux Arts de Toulon.</p>
        <p>J'ai une longue pratique artistique dans les champs de la peinture, la gravure, la fresque,le volume. J'ai
        exposé mon travail collectivement et individuellement, écrit un ouvrage sur ma démarche plastique.J ai également
            réalisé plusieurs décors de théâtre.</p>
        <p>J'ai enseigné les Arts Plastiques en Collège ainsi qu'aux adultes.Je suis intervenue en tant qu'artiste avec le
        soutien de la DRAC, dans les Établissements scolaires porteurs de projets artistiques, culturels et
        pluridisciplinaires. C'est dans ce cadre qu'une rencontre avec une maman d'autiste a ouvert une réflexion
            personnelle quant au mode d'accompagnement.</p>
        <p>Après avoir obtenu mon titre d'art-thérapeute (Profac Paris/Psychologie Appliquée et Psychanalyse), je me suis
        tournée vers l'autisme, le handicap et les démences chez la personne âgée (IME/Hôpital de jour Service de
            Pédopsychiatrie/Unités Protégées en EHPAD).</p>
        <p>En Cabinet, j’accueille des personnes autistes, des personnes souffrants de handicap, de jeunes enfants et
            adultes en échec scolaire, et/ou souffrant d'addictions.</p>
        <p>Je travaille également à la « Maison Verte » de la Seyne sur Mer,le Moulin à Paroles, qui suit le modèle établi
        par Françoise DOLTO. Dans une écoute profonde, nous accueillons des touts-petits ainsi que leurs parents, en vue
            de leur socialisation avant l'école.</p>
        <p>Je m'inscris dans un processus de recherche permanent et fais partie d'un groupe de recherche clinique
            (psychanalyse lacanienne) de l’Hôpital Sainte Anne de Toulon.</p>
    </div>
);

const degrees = null;

const professionalJourney = null;

// todo: function instead of listing
const baudot = {name, profession, tag, photo, phone, mail, presentation, degrees, professionalJourney};

export default baudot;
