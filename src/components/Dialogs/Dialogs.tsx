import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {dialogsPageType} from "../../redux/dialogsReducer";



type DialogPropsType = {
  dialogsPage: dialogsPageType
  updateNewMessageBody: (body: string) => void
  sendMessage:() => void
};

function Dialogs(props: DialogPropsType) {
  const state = props.dialogsPage
  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
  ));

  const messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id}/>
  ));

  const newMessageBody = state.newMessageBody

  const addMessageHandler = () => {
    props.sendMessage()
    // props.dispatch(sendMessageAC())
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const body = e.currentTarget.value
    props.updateNewMessageBody(body)
    // props.dispatch(updateNewMessageBodyAC(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
        <div>
        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={'enter text!'}/>
        <button onClick={addMessageHandler}>Add message</button>
        </div>
    </div>
  );
}

export default Dialogs;
