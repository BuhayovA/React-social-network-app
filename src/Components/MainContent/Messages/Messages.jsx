import React from 'react';
import style from "./Messages.module.css"
import Message from "./Message/Massege"
import DialogItem from './DialogItem/DialogItem'


const Dialogs = (props) => {
    debugger

    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                  imgSrc={dialog.imgSrc}/>)
    let messagesElements = props.messages.map(message => <Message message={message.message} imgSrc={message.imgSrc}/>)

    let onAddMessage = () => {
        props.addMessage();
    }
    let onChangeMessageInput = (event) => {
        let text = event.target.value;
        props.addTextMessage(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onChangeMessageInput} value={props.newMessage} placeholder="Write a message..."
                              className={style.input}/>
                </div>
                <button onClick={onAddMessage} disabled={!props.newMessage}>send</button>
            </div>
        </div>
    );

}

export default Dialogs