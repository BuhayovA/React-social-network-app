import React from 'react';
import style from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {

    let path = `/messages/${props.id}`

    return (
        <div className={style.dialogsItems__dialog}>
            <NavLink to={path} className={style.dialog} activeClassName={style.active} >
                <div className={style.avatar}>
                    <img src={props.imgSrc} alt="Avatar" className={style.img}/>
                </div>
            <div className={style.nickName}>
                {props.name}
            </div>
            </NavLink>
        </div>
    )
}


export default DialogItem