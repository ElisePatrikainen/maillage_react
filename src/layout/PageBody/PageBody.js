import React, {useState} from 'react';
import Navigation from "../Navigation/Navigation";
import './PageBody.css';
import BackgroundImage from '../../assets/images/hero.jpeg';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';
import Psychologists from "../../posts/Professions/Psychologists";
import Argumentary from "../../posts/Argumentary";
import Chart from "../../posts/Chart";
import {Professions} from "../../posts/Professions";
import Project from "../../posts/Project";
import Network from "../../posts/Network";
import Ambition from "../../posts/Ambition";
import Profile from "../../posts/Profile/Profile";
import Team from "../../posts/Team";
import ArtTherapist from "../../posts/Professions/ArtTherapist";
import Teacher from "../../posts/Professions/Teachers";

function PageBody() {
    let {topic} = useParams();
    return (
        <div id="top-cont">
            <img id="background-img-top" src={BackgroundImage} alt="background"/>

            <div id="main-cont">

                <div id="side">

                    {/* <SideSection/>
        <SideSection/> */}

                </div>

                <div id="main">
                    <div>
                        <Switch>
                            <Route path="/psychologue" component={Psychologists} />
                            <Route exact path="/therapeute" component={ArtTherapist} />
                            <Route exact path="/teacher" component={Teacher} />
                            <Route exact path="/argumentaire" component={Argumentary} />
                            <Route exact path="/metiers" component={Professions} />
                            <Route exact path="/charte" component={Chart} />
                            <Route exact path="/projet" component={Project} />
                            <Route exact path="/reseau" component={Network} />
                            <Route exact path="/ambition" component={Ambition} />
                            <Route exact path="/profile/:detail" component={Profile} />
                            <Route exact path="/equipe" component={Team} />
                        </Switch>
                    </div>

                    <div>
                        {/* <SectionCarrousel category="psychologists"/> */}
                    </div>

                </div>

            </div>

            <img id="background-img-bottom" src={BackgroundImage} alt="background"/>
        </div>
    );
}

export default PageBody;
