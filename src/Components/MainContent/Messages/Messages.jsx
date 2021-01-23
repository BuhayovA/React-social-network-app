import React from 'react';
import style from "./Messages.module.css"
import Message from "./Message/Massege"
import DialogItem from './DialogItem/DialogItem'
import {Input} from "@material-ui/core";
import {AiOutlineSend} from "react-icons/ai";
import IconButton from "@material-ui/core/IconButton";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}
                                                                  imgSrc={dialog.imgSrc}/>)
    let messagesElements = props.messages.map(message => <Message message={message.message} key={message.id}
                                                                  imgSrc={message.imgSrc}/>)

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
                <div className={style.input}>
                    <Input fullWidth onChange={onChangeMessageInput} value={props.newMessage}
                           placeholder="Write a message..."/>
                    <IconButton children={<AiOutlineSend/>}
                                color={'primary'}
                                size={'medium'}
                                onClick={onAddMessage}
                                disabled={!props.newMessage}/>
                </div>
            </div>
        </div>
    );

}

export default Dialogs