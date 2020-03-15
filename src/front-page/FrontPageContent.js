import React from 'react';
import './FrontPageContent.css';
import Image1 from './front1bis.jpg'

const content = (
    <div>

    <div id="section-1" className="section">
        <div className="with-large-image">
            <img src={Image1}/>
            <div className="text">
                <div>Réseau de professionnels indépendants dédié au handicap psychique</div>
                <div>Soin, aide, accompagnement : trouvez le professionnel adapté.</div>
            </div>
        </div>
    </div>

    <div id="section-2" className="section">
        <h1>Notre ambition</h1>
        <div id="section-2-images">
            <div className="image-cont">
                <img src={Image1}/>
                <div className="text">
                    => Présenter différentes professions aux utilisateurs
                </div>
            </div>
            <div className="image-cont">
                <img src={Image1}/>
                <div className="text">
                    => Regrouper des professionnels attentifs à l'écoute et au suivi singulier des personnes
                </div>
            </div>
            <div className="image-cont">
                <img src={Image1}/>
                <div className="text">
                    => Favoriser la réflexion et faciliter des liens
                </div>
            </div>
        </div>
        <button>En savoir plus</button>
    </div>

    <div id="section-3" className="section">
        <h1>Notre organisation</h1>
        <div className="with-large-image">
            <img src={Image1}/>
            <div className="text">
                <div>Réseau de professionnels indépendants dédié au handicap psychique</div>
                <div>Soin, aide, accompagnement : trouvez le professionnel adapté.</div>
            </div>
        </div>
        <button>Bienvenue sur Maillage</button>
    </div>

    <footer>
        <ul>
            <li>Thérapie</li>
            <li>Accompagnement social</li>
            <li>Sport</li>
            <li>Activités culturelles</li>
        </ul>
        <ul>
            <li>Nos métiers</li>
            <li>Notre charte</li>
            <li>Qui sommes-nous ?</li>
            <li>Associations partenaires</li>
        </ul>
    </footer>
    </div>

)

function FrontPageContent(prop) {
    return content;
}

export default FrontPageContent;