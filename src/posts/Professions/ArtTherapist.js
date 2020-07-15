import React from "react";
import {PageH2Before} from "../../layout/Helpers/Helpers";
import ProfileCards from "../../layout/Cards/ProfileCards";


function ArtTherapist() {

    const title = "thérapeutes";

    return (
        <div>
            <div>
                <div className="section">
                    <h1>Les {title} Maillage:</h1>
                    <ProfileCards tag="therapist" small={true}/>
                </div>

                <div className="section colored-background text">
                    <h2>
                        <PageH2Before/>
                        L'art-thérapie, c'est<span className="bold"> prendre sa parole en main</span> :
                    </h2>
                    <p>
                        Utilisée dans le champ du soin et de la prévention, l'Art-thérapie est une méthode qui consiste
                        à
                        créer les conditions favorables à l'expression et au dépassement des difficultés personnelles
                        par le
                        biais d'une stimulation des capacités créatrices.Elle trouve sa place dans des troubles
                        dépressifs
                        et psychosomatiques, des pathologies plus sévères comme les psychoses et l'autisme et aussi les
                        démences séniles.
                    </p>
                    <p>
                        Dans le champs de l'art-thérapie, l'Art peut être entendu aux racines (ars en latin : savoir
                        faire)
                        mais aussi savoir y faire avec le symptôme. Prendre sa parole en mains, c'est mettre à distance
                        la
                        souffrance par le biais de la création. L'art-thérapie, via le travail avec la matière,permet de
                        dédramatiser des sensations archaïques en représentation ludique soutenue par le thérapeute.
                        Cette
                        forme de thérapie débouche assez souvent sur un changement de position dans le lien social,
                        passage
                        du spectateur à l'acteur, capable de bricolages vitaux, finissant par trouver confiance en ses
                        capacités. L'art-thérapie est une mise au travail psychique ou l'inconscient est convié et où le
                        temps de la séance n'est plus à concevoir comme une norme mais comme une temporalité
                        psychique où l'on « fait avec » ce qui va être produit.En ce sens, le thérapeute accepte que
                        l'élaboration psychique du patient lui échappe et respecte entièrement ses choix, se gardant de
                        tout
                        jugement. L'art-thérapeute place le patient au centre du processus thérapeutique et trouve son
                        ancrage dans l'éthique du soin psychique constamment éclairée par la clinique de terrain et le
                        psychanalyse. Il se met au service du patient dans une écoute profonde et le reconnaît dans ce
                        qu'il
                        exprime de sa souffrance et des moyens dont il dispose pour la déposer. Les objets produits en
                        séance n'ont pas de finalité esthétique mais sont le fruit d'une plasticité psychique.
                        Aucun processus thérapeutique ne peut s'envisager sans entretien préliminaire permettant de
                        proposer
                        une thérapie préventive, dynamique ou curative, voire diriger le patient vers une médiation
                        artistique*.
                    </p>
                    <p>
                        L'espace thérapeutique est un lieu sécure où les souffrances peuvent être traduites sans
                        jugement
                        sur ce qui est créé ou dit. Les dispositifs proposés invitent à une mise à distance des
                        blocages,
                        une mise en mouvement du corps et une contribution du regard dans l'Agir.Oser se confronter avec
                        la
                        matière, c'est laisser à sa création une grande part d'inconnu et « faire avec » le décalage
                        objet
                        imaginé/objet produit.
                    </p>
                </div>

                <div className="section text">
                    <h2>
                        <PageH2Before/>
                        Art-thérapie et<span className="bold"> Déontologie</span> :
                    </h2>
                    <p>
                    L'art-thérapeute ,dont la formation est reconnue par l’État, est diplômé en Psychologie
                    Appliquée/Psychanalyse). Conscient du transfert et contre transfert, il est supervisé par un
                    professionnel (psychanalyste). Il est soumis au secret professionnel et au respect du Code de
                    Déontologie.Il ne se substitue jamais au médecin. Ses actions ne s'inscrivent pas dans le champ du
                    développement personnel, ni dans celui du bien être mais d'un mieux être psychique. Il s’inscrit
                    dans un processus de recherche. Sa pratique est laïque et préventive de toute dérive sectaire. Il
                    est anti-comportementaliste. Il renonce à toute forme de guidance et d'interprétation forcement
                    subjective et aliénante. Il s'écarte de la conception du beau et de l'esthétique et opte pour la
                    libération de l'espace psychique. L'art-thérapie n'est pas une médiation artistique.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default ArtTherapist;
