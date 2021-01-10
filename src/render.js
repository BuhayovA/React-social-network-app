import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost , addTextPost, addMessage, addTextMessage} from "./redux/state"





export let rerenderEntireTree = (state) => {
    localStorage.setItem('state', JSON.stringify(state))
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addTextPost={addTextPost} addMessage={addMessage} addTextMessage={addTextMessage} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}