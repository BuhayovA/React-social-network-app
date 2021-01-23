import React from 'react';
import style from './mainContent.module.css';
import Profile from "./Profile/Profile"
import Music from "./Music/Music"
import News from "./News/News"
import Settings from "./Settings/Settings"
import {Route} from "react-router-dom";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";


const MainContent = (props) => {

    return (
        <div className={style.mainContent}>
            <Route path="/messages" render={() =>  <MessagesContainer/>}/>
            <Route path="/profile" render={() =>  <Profile/> } />
            <Route path="/music" render={() =>  <Music /> }/>
            <Route path="/news" render={() =>  <News /> }/>
            <Route path="/settings" render={() =>  <Settings /> }/>
            <Route path="/users" render={() =>  <UsersContainer /> }/>
        </div>
    );
}
export default MainContent;
