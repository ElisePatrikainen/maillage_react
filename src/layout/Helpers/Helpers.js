import React from "react";
import {faFan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Helpers.css";

function PageH2Before() {
    return <span className="before-title title-underlined"><FontAwesomeIcon icon={faFan}/></span>;
}

export {PageH2Before};
