import React from "react";
import "./FPProfessions.css";
import {useHistory} from "react-router-dom";
import Image from "../../assets/images/front1bis.jpg";
import {list_professions_data} from "../../assets/data/frontPage";

// todo: set as class ?
function FPProfessions() {

    const history = useHistory();
    const navigate = (path) => {
        window.scrollTo(0, 0)
        history.push(path);
    };

    const getProfessions = (key) => list_professions_data[key].map(
        (el) => (<button className={'list-button' + (el.active ? ' active' : '')}
                         onClick={() => el.active ? navigate(el.link) : ''}>{el.title}</button>));

    return (
        <div id="section-4" className="fp-section">
            <div className="h1-cont">
                <h1>Nos métiers</h1>
            </div>
            <div className="list-section">
                <div className="list-container">
                    <div>
                        <h2>Thérapie :</h2>
                        <div>
                            {getProfessions('therapy')}
                        </div>
                    </div>

                    <div>
                        <h2>Aide et accompagnement social :</h2>
                        <div>
                            {getProfessions('social_support')}
                        </div>
                    </div>

                    <div>
                        <h2>Activités :</h2>
                        <div>
                            {getProfessions('activities')}
                        </div>
                    </div>

                </div>

                <div className="divided-image">
                    <img src={Image} alt=""/>
                    <div className="dividers-cont">
                        <div className="divider"/>
                        <div className="divider"/>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default FPProfessions;
