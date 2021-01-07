import React from 'react';
import style from './nav.module.css'
import {NavLink} from "react-router-dom";
import {CgProfile} from 'react-icons/cg';
import {BsNewspaper} from 'react-icons/bs';
import {AiOutlineMessage} from 'react-icons/ai';
import {IoMdMusicalNote} from 'react-icons/io';
import {IoSettingsOutline} from 'react-icons/io5';

const MenuNavigations = () => {
    return (
        <nav className={style.nav}>
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
    )
}

export default MenuNavigations