import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {DialogPropsType} from "./DialogsContainer";
import {AddMessageReduxForm, FormDataType} from "./Message/AddMessageForm/AddMessageForm";


function Dialogs(props: DialogPropsType) {
    const state = props.dialogsPage
    const dialogsElements = state.dialogs.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    ));

    const messagesElements = state.messages.map((message) => (
        <Message message={message.message} key={message.id}/>
    ));



    const onSubmit = (formData: FormDataType) => {
      //  debugger
        props.sendMessage(formData.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
           <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Dialogs;
