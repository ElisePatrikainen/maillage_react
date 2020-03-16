import React from "react";
import Card from "./Card";
import "./Cards.css";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Cards(props) {
    const {title, details} = props;
    return (
        <div className="section white-background">
            <h1>Les {title}</h1>
            <div className="cards">
                {details.map((detail) => (<Card data={detail}/>))}
            </div>
            <button className="cards-button">
                <span>Tous les profils</span>
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    )
}

export default Cards;
