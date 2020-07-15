import React from "react";
import {faFan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Helpers.css";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

function PageH2Before() {
    return <span className="before-title title-underlined"><FontAwesomeIcon icon={faFan}/></span>;
}

function UserPhoto(props) {
    const {profile} = props;

    return (
        <div className={'user-photo' + (profile.photo ? '' : ' default-user-photo')}>
            {profile.photo ?
                (<img src={profile.photo} alt={profile.name}/>)
                : (<FontAwesomeIcon icon={faUser}/>)
            }
        </div>)

}

export {PageH2Before, UserPhoto};
