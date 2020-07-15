import React from "react";
import PropTypes from 'prop-types';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './SocialButtons.css';

const icons = {
    linkedIn: <FontAwesomeIcon icon={faLinkedin}/>,
    website: <FontAwesomeIcon icon={faArrowAltCircleRight}/>
}

function SocialButtons(props) {
    return (
        <button className={props.key}
                onClick={() => window.open(props.url)}>
            <span className="icon">{icons[props.key]}</span>
            <span>{props.label}</span>
        </button>
    )
}

SocialButtons.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.any,
    label: PropTypes.string
}

export function LinkedInButton(url) {
    return SocialButtons({
        key: 'linkedIn',
        label: 'LinkedIn',
        url
    })
}

export function WebsiteButton(url) {
    return SocialButtons({
        key: 'website',
        label: 'site personnel',
        url
    })
}
