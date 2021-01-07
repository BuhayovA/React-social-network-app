import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MenuNavigations from './Components/MenuNavigations/nav';
import MainContent from './Components/MainContent/mainContent';


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <MenuNavigations/>
            <MainContent profilePage={props.state.profilePage}
                         messenger={props.state.messengerPage}
            />
        </div>

    );
}
export default App;