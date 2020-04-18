import React from "react";
import "./Card.css";
import "./CardProfile.css";
import {useHistory} from "react-router-dom";
import profiles from "../../assets/data/profiles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

function CardProfile(props) {

    const history = useHistory();
    const navigate = (path) => history.push(path);

    const profile = profiles[props.profile];

    if (!profile) {
        // todo: handle error
    }
    const small = props.small;
    const classes = 'card profile' + (small ? ' small' : '');
    return (
        <div onClick={() => navigate("profile/" + props.profile)} className={classes}>
            <div className={'title' + (profile.photo ? '' : ' default-user-icon')}>
                {profile.photo ?
                    (<img src={profile.photo} alt={profile.name}/>)
                    : (<FontAwesomeIcon icon={faUser}/>)
                }
                {small ? (<h2>{profile.name}</h2>) : ''}
            </div>
            <div className="description">
                {small ? '' : (<h2>{profile.name}</h2>)}
                {profile.profession}
            </div>
        </div>
    )
}

export default CardProfile;
