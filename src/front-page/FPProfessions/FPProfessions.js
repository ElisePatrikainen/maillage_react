import React from "react";
import "./FPProfessions.css";
import {useHistory} from "react-router-dom";

const data = {
    therapy: [{
        title: 'psychiatre', link: 'psychiatre'
    }, {
        title: 'psychologue', link: 'psychologue'
    }, {
        title: 'psychanalyste', link: 'psychanalyste'
    }, {
        title: 'art thérapeute', link: 'art-thérapeute'
    }, {
        title: 'ergothérapeute', link: 'ergothérapeute'
    }]
};

function FPProfessions() {

    const history = useHistory();
    const navigate = (path) => history.push(path);

    const therapyProfessions = data.therapy.map(
        (el) => (<button className="list-button" onClick={() => navigate(el.link)}>{el.title}</button>)
    );

    return (
        <div id="section-4" className="fp-section">
            <div className="h1-cont">
                <h1>Nos métiers</h1>
            </div>
            <div className="list-section">
                <div className="list-container">
                    <div>
                        <h2>Thérapie</h2>
                        <div>
                            {therapyProfessions}
                        </div>
                    </div>

                    <div>
                        <h2>Aide et thérapie sociale :</h2>
                        <div>
                            {therapyProfessions}
                        </div>
                    </div>

                    <div>
                        <h2>Thérapie</h2>
                        <div>
                            {therapyProfessions}
                        </div>
                    </div>

                </div>
                <div className="images-container">
                    <div className="image"></div>
                    <div className="vertical-images">
                        <div className="image"></div>
                        <div className="image"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FPProfessions;