import React from "react";
import Card from "./Card";
import "./Cards.css";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CardProfile from "./CardProfile";

function Cards(props) {
    const {details, profiles, small} = props;
    return (
        <div>
            <div className="cards">
                {details.map((detail) => profiles ? (<CardProfile data={detail} small={small}/>) : (<Card data={detail}/>))}
            </div>
            {details.length < 3 ? "" : (
                <button className="cards-button">
                    <span>Tous les profils</span>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            )}
        </div>
    )
}

export default Cards;
