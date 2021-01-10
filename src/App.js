import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MenuNavigations from './Components/MenuNavigations/nav';
import MainContent from './Components/MainContent/mainContent';



const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <MenuNavigations friendsNav={props.state.friendsNav}/>
            <MainContent profilePage={props.state.profilePage}
                         messenger={props.state.messengerPage}
                         addPost={props.addPost}
                         addTextPost={props.addTextPost}
                         addMessage={props.addMessage}
                         addTextMessage={props.addTextMessage}
            />
        </div>

    );
}
export default App;