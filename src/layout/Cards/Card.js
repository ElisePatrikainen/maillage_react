import React from "react";
import "./Card.css";
// todo: dynamic imports
import { ReactComponent as AmbitionSvg } from '../../assets/images/sailor.svg';
import { ReactComponent as NetworkSvg } from '../../assets/images/online_team_meeting_.svg';
import { ReactComponent as GoalsSvg } from '../../assets/images/checklist_.svg';
import Portrait from '../../assets/images/portrait.jpeg';
import {useHistory} from "react-router-dom";

function Card(props) {

    const history = useHistory();
    const navigate = (path) => history.push(path);

    const {name, title = null, firstName, description, image, link} = props.data;
    const large = props.large | false;
    return (
        <div onClick={() => navigate(link)} className={'card' + (large ? ' large' : '')}>
            <div className="title">
                {chooseImage(image)}
                {name ? <h3>{ firstName[0] + '. ' + name}</h3> : "" }
            </div>
            {!name ? <h1>{title}</h1> : ""}
            <div className="description">{description}</div>
        </div>
    )
}

function chooseImage(image) {
    switch (image) {
        case "ambition": return (<AmbitionSvg/>);
        case "network": return (<NetworkSvg/>);
        case "goals": return (<GoalsSvg/>);
        case "portrait": return (<img src={Portrait}/>)
    }
}

export default Card;
