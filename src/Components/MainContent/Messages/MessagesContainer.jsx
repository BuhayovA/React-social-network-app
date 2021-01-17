import React from 'react';
import {addMessageActionCreator, addTextMessageActionCreator} from "../../../redux/MessengerPageReducer";
import Dialogs from "./Messages";


const MessagesContainer = (props) => {
    let state = props.store.getState();
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let addTextMessage = (text) => {
        props.store.dispatch(addTextMessageActionCreator(text))
    }

    return (
        <Dialogs addMessage={addMessage}
                 addTextMessage={addTextMessage}
                 dialogs={state.messengerPage.dialogs}
                 messages={state.messengerPage.messages}
                 newMessage={state.messengerPage.newMessage}
        />
    );

}

export default MessagesContainer