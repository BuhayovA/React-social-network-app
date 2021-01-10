import React from 'react';
import style from './mainContent.module.css';
import Profile from "./Profile/Profile"
import Dialogs from "./Messages/Massenges"
import Music from "./Music/Music"
import News from "./News/News"
import Settings from "./Settings/Settings"
import {Route} from "react-router-dom";


const MainContent = (props) => {

    return (
        <div className={style.mainContent}>
            {/*<Route path="/messages" component={Dialogs}/>*/}
            {/*<Route path="/profile" component={Profile}/>*/}
            {/*<Route path="/music" component={Music}/>*/}
            {/*<Route path="/news" component={News}/>*/}
            {/*<Route path="/settings" component={Settings}/>*/}

            <Route path="/messages" render={() =>  <Dialogs dialogs={props.messenger.dialogs}
                                                            messages={props.messenger.messages}
                                                            addMessage={props.addMessage}
                                                            addTextMessage={props.addTextMessage}
                                                            newMessage={props.messenger.newMessage}
            />}/>
            <Route path="/profile" render={() =>  <Profile postsData={props.profilePage.posts}
                                                           newPostText={props.profilePage.newPostText}
                                                           addPost={props.addPost}
                                                           addTextPost={props.addTextPost}
            /> } />
            <Route path="/music" render={() =>  <Music /> }/>
            <Route path="/news" render={() =>  <News /> }/>
            <Route path="/settings" render={() =>  <Settings /> }/>
        </div>
    );
}
export default MainContent;
