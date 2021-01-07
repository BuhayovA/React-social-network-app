import React from 'react';
import style from './nav.module.css'
import Friends from "./Friends/Friends"
import {NavLink} from "react-router-dom";
import {CgProfile} from 'react-icons/cg';
import {BsNewspaper} from 'react-icons/bs';
import {AiOutlineMessage} from 'react-icons/ai';
import {IoMdMusicalNote} from 'react-icons/io';
import {IoSettingsOutline} from 'react-icons/io5';


const MenuNavigations = (props) => {

    let friendsElement = [];

    for (let i = 0; i < 3; i++) {
        friendsElement[i] = <Friends imgSrc={props.friendsNav[i].imgSrc} id={props.friendsNav[i].id} name={props.friendsNav[i].name} />
    }
    return (
        <div className={style.nav}>
            <nav>
                <div className={style.item}>
                    <NavLink to='/profile' activeClassName={style.active}>
                        <CgProfile className={style.logo}/>
                        Profile
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/messages' activeClassName={style.active}>
                        <AiOutlineMessage className={style.logo}/>
                        Messages
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/news' activeClassName={style.active}>
                        <BsNewspaper className={style.logo}/>
                        News
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/music' activeClassName={style.active}>
                        <IoMdMusicalNote className={style.logo}/>
                        Music
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/settings' activeClassName={style.active}>
                        <IoSettingsOutline className={style.logo}/>
                        Settings
                    </NavLink>
                </div>
            </nav>
            <div className={style.titleFriends}>
                <NavLink to='/friends'>Friends</NavLink>
            </div>
            <div className={style.friendsBoard}>
                {friendsElement}
            </div>
        </div>
    )
}

export default MenuNavigations