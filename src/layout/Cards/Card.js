import React from "react";
import "./Card.css";
// todo: dynamic imports
import Image from "./../../assets/images/portrait.jpeg";

function Card(props) {
    const {name, firstName, description} = props.data;
    return (
        <div className="card">
            <div className="title">
                <img src={Image}/>
                <h3>{firstName[0]}. {name}</h3>
            </div>
            <div className="description">{description}</div>
        </div>
    )
}

export default Card;
