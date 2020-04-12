import React from "react";
import "./Card.css";
import "./CardProfile.css";
// todo: dynamic imports
import PatrikainenImage from '../../assets/images/Geraldine-Patrikainen.jpg';
import User from '../../assets/images/user.png';
import {useHistory, useParams} from "react-router-dom";
import profiles from "../../assets/data/profiles";

function CardProfile(props) {

    const history = useHistory();
    const navigate = (path) => history.push(path);

    const {profile} = props;
    const small = props.small;
    const classes = 'card profile' + (small ? ' small' : '');
    return (
        <div onClick={() => navigate(profile.link)} className={classes}>
            <div className="title">
                <img src={profile.image ? profile.image : User}/>
                {small ? (<h2>{profile.name}</h2>) : ''}
            </div>
            <div className="description">
                {small ? '' : (<h2>{profile.name}</h2>)}
                {profile.profession}
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
