import React from 'react';
import style from "./Messages.module.css"
import Message from "./Message/Massenges"
import DialogItem from './DialogItem/DialogItem'


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} imgSrc={dialog.imgSrc}/> )
    let messagesElements = props.messages.map( message => <Message message={message.message} imgSrc={message.imgSrc}/> )

    // let dialogsElements =
    //     [
    //         <DialogItem id={dialogs[0].id} name={dialogs[0].name} imgSrc={dialogs[0].imgSrc}/>,
    //         <DialogItem id={dialogs[1].id} name={dialogs[1].name} imgSrc={dialogs[1].imgSrc}/>
    //     ]

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder="Write a message..." ref={newMessageElement} className={style.input}/>
                </div>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );

}

export default Dialogs