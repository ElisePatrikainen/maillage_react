import React from "react";
import "./Card.css";
// todo: dynamic imports
import Image from "./../../assets/images/portrait.jpeg";

function Card(props) {
    const {name, title = null, firstName, description} = props.data;
    const large = props.large | false;
    return (
        <div className={'card' + (large ? ' large' : '')}>
            <div className="title">
                <img src={Image}/>
                <h3>{title ? title : firstName[0] + '. ' + name}</h3>
            </div>
            <div className="description">{description}</div>
        </div>
    )
}

export default Card;
