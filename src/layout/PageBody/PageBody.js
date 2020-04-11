import React from 'react';
import Navigation from "../Navigation/Navigation";
import './PageBody.css';
import Image1 from '../../assets/images/hero.jpeg';
import {useParams} from 'react-router-dom';
import Psychologists from "../../posts/Professions/Psychologists";
import Argumentary from "../../posts/Argumentary";
import Chart from "../../posts/Chart";
import Professions from "../../posts/Professions";
import Project from "../../posts/Project";
import Network from "../../posts/Network";
import Ambition from "../../posts/Ambition";
import Patrikainen from "../../posts/Profiles/Patrikainen";
import Barbier from "../../posts/Profiles/Barbier";
import Foucault from "../../posts/Profiles/Foucault";

// todo: in a service
function choosePost(constantKey) {
    switch (constantKey) {
        case 'psychologue': return (<Psychologists/>);
        case 'argumentaire': return (<Argumentary/>);
        case 'metiers': return (<Professions/>);
        case 'charte': return (<Chart/>);
        case 'projet': return (<Project/>);
        case 'reseau': return (<Network/>);
        case 'ambition': return (<Ambition/>);
        case 'patrikainen': return (<Patrikainen/>);
        case 'barbier': return (<Barbier/>);
        case 'foucault': return (<Foucault/>);
        default: return (<h2>{constantKey}</h2>);
    }
}

function PageBody() {
    let {constantKey} = useParams();
    return (
        <div id="top-cont">
            <img id="background-img-top" src={Image1}/>
            <Navigation/>

            <div id="main-cont">

                <div id="side">

                    {/* <SideSection/>
        <SideSection/> */}

                </div>


                <div id="main">
                    <div>{choosePost(constantKey)}
                    </div>

                    <div>
                        {/* <SectionCarrousel category="psychologists"/> */}
                    </div>

                </div>

            </div>

            <img id="background-img-bottom" src={Image1}/>
        </div>
    );
}

export default PageBody;
