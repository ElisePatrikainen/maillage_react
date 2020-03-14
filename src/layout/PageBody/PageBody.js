import React from 'react';
import Navigation from "../Navigation/Navigation";
import './PageBody.css';

const content = (
  <div>
    <img id="background-img-top" src="front1bis.jpg" />
    <Navigation />

    <div id="main-cont">
        
    <div id="side">

        {/* <SideSection/>
        <SideSection/> */}

    </div>

    
    <div id="main">
        <div>
            {/* <SectionText textId="psychologue"/>
            <SectionText textId="psychologue2" background="colored"/> */}
        </div>

        <div>
            {/* <SectionCarrousel category="psychologists"/> */}
        </div>

    </div>

    </div>

    <img id="background-img-bottom" src="front1bis.jpg" />
  </div>
);

function PageBody(props) {
    return content;
}

export default PageBody;