import React from 'react';
import style from "./Friends.module.css"
import {NavLink} from "react-router-dom";
import {CgProfile} from "react-icons/cg";


const Friends = (props) => {
    return (

        <div className={style.friends}>
            <NavLink to={`/friends/${props.id}`}  activeClassName={style.active}>
                <img src={props.imgSrc} alt="" className="avatar"/>
            </NavLink>
        </div>

    )
}

export default Friends