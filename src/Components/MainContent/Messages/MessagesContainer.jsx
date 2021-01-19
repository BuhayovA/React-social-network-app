import React from 'react';
import {addMessageActionCreator, addTextMessageActionCreator} from "../../../redux/MessengerPageReducer";
import Dialogs from "./Messages";
import StoreContext from "../../../StoreContext";


const MessagesContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    let addTextMessage = (text) => {
                        store.dispatch(addTextMessageActionCreator(text))
                    }

                    return <Dialogs addMessage={addMessage}
                                    addTextMessage={addTextMessage}
                                    dialogs={state.messengerPage.dialogs}
                                    messages={state.messengerPage.messages}
                                    newMessage={state.messengerPage.newMessage}
                    />
                }
            }
        </StoreContext.Consumer>
    );

}

export default MessagesContainer