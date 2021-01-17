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
            <MainContent store={props.store}/>
        </div>

    );
}
export default App;