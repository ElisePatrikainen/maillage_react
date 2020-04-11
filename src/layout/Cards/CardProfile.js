import React from "react";
import "./Card.css";
import "./CardProfile.css";
// todo: dynamic imports
import PatrikainenImage from '../../assets/images/Geraldine-Patrikainen.jpg';
import User from '../../assets/images/user.png';
import {useHistory} from "react-router-dom";

function CardProfile(props) {

    const history = useHistory();
    const navigate = (path) => history.push(path);

    const {name, firstName, description, image, link} = props.data;
    const small = props.small;
    const classes = 'card profile' + (small ? ' small' : '');
    return (
        <div onClick={() => navigate(link)} className={classes}>
            <div className="title">
                {chooseImage(image)}
                {small ? (<h2>{ firstName[0] + '. ' + name}</h2>) : ''}
            </div>
            <div className="description">
                {small ? '' : (<h2>{ firstName[0] + '. ' + name}</h2>)}
                {description}
            </div>
        </div>
    )
}

function chooseImage(image) {
    switch (image) {
        case "patrikainen": return (<img src={PatrikainenImage}/>);
        default: return (<img src={User}/>);
    }
}

export default CardProfile;
