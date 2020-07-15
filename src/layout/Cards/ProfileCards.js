import React from "react";
import "./ProfileCards.css";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProfileCard from "./ProfileCard";
import {filterByTag, shuffle} from "../../shared/helper-functions";
import profiles from "../../assets/data/profiles";
import Slider from "react-slick";

function SampleArrow(props) {
    const { className, style, onClick, next } = props;
    return (
        <div
            className={className + (next ? ' custom-slick-next' : ' custom-slick-prev')}
            style={{ ...style, display: "block", height: "18rem", width: "100px" }}
            onClick={onClick}
        />
    );
}

function ProfileCards(props) {
    const {small, tag} = props;
    const _profiles = shuffle(tag ? filterByTag(profiles, tag) : Object.keys(profiles));
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: _profiles.length > 3 ? 4 : _profiles.length,
        slidesToScroll: 1,
        prevArrow: <SampleArrow />,
        nextArrow: <SampleArrow next={true}/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: _profiles.length > 2 ? 3 : _profiles.length,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: _profiles.length > 1 ? 2 : _profiles.length,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="slider-cont">
            <Slider {...settings}>
                {_profiles.map((key) => (<ProfileCard profile={key} small={small}/>))}
            </Slider>
            </div>
            {/*
            {details && details.length < 3 ? "" : (
                <button className="cards-button dark">
                    <span>Tous les profils</span>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            )}
            */}
        </div>
    )
}

export default ProfileCards;
