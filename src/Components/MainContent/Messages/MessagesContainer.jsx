import React from 'react';
import {addMessageActionCreator, addTextMessageActionCreator} from "../../../redux/MessengerPageReducer";
import Dialogs from "./Messages";
import {connect} from "react-redux";


// const MessagesContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator())
//                     }
//                     let addTextMessage = (text) => {
//                         store.dispatch(addTextMessageActionCreator(text))
//                     }
//
//                     return <Dialogs addMessage={addMessage}
//                                     addTextMessage={addTextMessage}
//                                     dialogs={state.messengerPage.dialogs}
//                                     messages={state.messengerPage.messages}
//                                     newMessage={state.messengerPage.newMessage}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     );
//
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.messengerPage.dialogs,
        messages: state.messengerPage.messages,
        newMessage: state.messengerPage.newMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        addTextMessage: (text) => {
            dispatch(addTextMessageActionCreator(text))
        },
    }
}


let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default MessagesContainer