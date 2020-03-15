import React from "react";
import "./FrontPageBody.css";
import NavigationFrontPage from "../Navigation/NavigationFrontPage";
import FrontPageContent from "../../front-page/FrontPageContent";

const content = (
  <div id="fp-top-cont">
    <div id="fp-right-band"></div>
    <NavigationFrontPage/>
    <div id="fp-main">
      <FrontPageContent/>
    </div>
  </div>
);

function FrontPageBody(props) {
  return content;
}

export default FrontPageBody;
