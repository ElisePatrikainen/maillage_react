import React from 'react';
import Navigation from "../Navigation/Navigation";
import './PageBody.css';
import Image1 from '../../assets/front1bis.jpg';
import {useParams} from 'react-router-dom';
import Psychologue from "../../posts/Psychologue";

function choosePost(constantKey) {
    switch (constantKey) {
        case 'psychologue': return (<Psychologue/>); break;
        default: return (<h2>{constantKey}</h2>);
    }
}

function PageBody() {
    let {constantKey} = useParams()
    console.log('key', constantKey);
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
