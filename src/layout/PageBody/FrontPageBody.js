import React from "react";
import "./FrontPageBody.css";
import FrontPageContent from "../../front-page/FrontPageContent";
import Navigation from "../Navigation/Navigation";

const content = (
  <div id="fp-top-cont">
    <Navigation isFrontPage="true"/>
    <div id="fp-main">
      <FrontPageContent/>
    </div>
  </div>
);

function FrontPageBody(props) {
  return content;
}

export default FrontPageBody;
