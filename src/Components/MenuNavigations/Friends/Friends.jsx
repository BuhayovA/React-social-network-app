import React from 'react';
import style from "./Friends.module.css"
import {NavLink} from "react-router-dom";
import {CgProfile} from "react-icons/cg";


const Friends = (props) => {
    return (
        <NavLink to={`/friends/${props.id}`} activeClassName={style.active}>
            <div className={style.friends}>
                <img src={props.imgSrc} alt="" className="avatar"/>
            </div>
        </NavLink>
    )
}

export default Friends