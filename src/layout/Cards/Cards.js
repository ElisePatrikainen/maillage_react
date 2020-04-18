import React from "react";
import Card from "./Card";
import "./Cards.css";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CardProfile from "./CardProfile";
import profiles from "../../assets/data/profiles";

function Cards(props) {
    const {details, small} = props;
    return (
        <div>
            <div className="cards">
                {
                    profiles ?
                        Object.keys(profiles).map((key) => (<CardProfile profile={key} small={small}/>))
                        : details.map((detail) => (<Card data={detail}/>))
                }
            </div>
            {details && details.length < 3 ? "" : (
                <button className="cards-button dark">
                    <span>Tous les profils</span>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            )}
        </div>
    )
}

export default Cards;
