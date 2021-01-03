import React from "react";
import style from './AboutMe.module.css'
import Loader from "../../common/Loader/Loader";


const AboutMe = (props) => {

    if(!props.profile) {
        return <Loader />
    }

    return (
        <div className={style.aboutMe}>
            <div className={style.avatar}>
                <img src={props.profile.photos.large}  alt="Avatar"/>
            </div>
            <div className={style.info}>
                <h2>{props.profile.fullName}</h2>
                <ul>
                    <li>Date of Birth: 2 December</li>
                    <li>City: Tomsk</li>
                    <li>Education: TUSUR</li>
                    <li>VK: {props.profile.contacts.vk}</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe;