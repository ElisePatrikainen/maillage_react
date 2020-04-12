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
import Profile from "../../posts/Profile/Profile";

// todo: in a service
function choosePost(topic) {
    switch (topic) {
        case 'psychologue': return (<Psychologists/>);
        case 'argumentaire': return (<Argumentary/>);
        case 'metiers': return (<Professions/>);
        case 'charte': return (<Chart/>);
        case 'projet': return (<Project/>);
        case 'reseau': return (<Network/>);
        case 'ambition': return (<Ambition/>);
        case 'profile': return (<Profile/>);
        default: return (<h2>{topic}</h2>);
    }
}

function PageBody() {
    let {topic} = useParams();
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
                    <div>{choosePost(topic)}
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
