import React from "react";
import {PageH2Before, UserPhoto} from "../../layout/Helpers/Helpers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import "./Profile.css";
import profiles from "../../assets/data/profiles";
import {useParams} from "react-router-dom";
import {LinkedInButton, WebsiteButton} from "../../layout/Buttons/SocialButtons";


function Profile() {

    //todo : mutualize ?
    let {detail} = useParams();
    const profile = profiles[detail];

    if (!profile) {
        return (<div>{detail} is not a profile.</div>)
    }

    return (
        <div id="profile">
            <div>
                <div className="section first-section colored-background" style={{display: 'flex'}}>
                    <div className="user-photo">
                        <UserPhoto profile={profile}/>
                    </div>
                    <div className="contact">
                        <h1>{profile.name} :</h1>
                        <div>
                            <div className="sub-title">{profile.profession}</div>
                            <div className="contact-details">
                                {profile.phone ? (<div><span className="icon"><FontAwesomeIcon icon={faPhone}/></span>{profile.phone}</div>) : ""}
                                {profile.mail ? (<div><span className="icon"><FontAwesomeIcon icon={faEnvelope}/></span>{profile.mail}</div>) : ""}
                            </div>
                            <div>
                                {profile.website ? (WebsiteButton(profile.website)) : ""}
                                {profile.linkedIn ? (LinkedInButton(profile.linkedIn)) : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2>
                        <PageH2Before/>
                        <span className="bold">Présentation :</span>
                    </h2>
                    {profile.presentation}
                </div>

                {profile.degrees ? (
                    <div className="section colored-background">
                        <h2>
                            <PageH2Before/>
                            <span className="bold">Diplômes :</span>
                        </h2>
                        {profile.degrees}
                    </div>
                ) : ""}

                {profile.professionalJourney ? (
                    <div className="section">
                        <h2>
                            <PageH2Before/>
                            <span className="bold">Parcours professionnel :</span>
                        </h2>
                        {profile.professionalJourney}
                    </div>
                ) : ""}

            </div>

        </div>
    )
}

export default Profile;
