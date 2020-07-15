import React from "react";
import "./ProfileCard.css";
import {useHistory} from "react-router-dom";
import profiles from "../../assets/data/profiles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {UserPhoto} from "../Helpers/Helpers";

function ProfileCard(props) {

    const history = useHistory();
    const navigate = (path) => {
        window.scrollTo(0, 0)
        history.push(path);
    };

    const profile = profiles[props.profile];

    if (!profile) {
        // todo: handle error
    }
    const small = props.small;
    const classes = 'card profile' + (small ? ' small' : '');
    return (
        <div onClick={() => navigate("profile/" + props.profile)} className={classes} style={{marginTop: '1rem'}}>
            <div className={'title' + (profile.photo ? '' : ' light-gradient')}>
                <UserPhoto profile={profile}/>
                {small ? (<h2>{profile.name}</h2>) : ''}
            </div>
            <div className="description">
                {small ? '' : (<h2>{profile.name}</h2>)}
                {profile.professionShort || profile.profession}
            </div>
        </div>
    )
}

export default ProfileCard;
