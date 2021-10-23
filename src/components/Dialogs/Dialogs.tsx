import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {ActionsTypes, dialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";

type DialogPropsType = {
  state: dialogsPageType;
  dispatch: (action: ActionsTypes) => void
};

function Dialogs(props: DialogPropsType) {
  const dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  const newMessageBody = props.state.newMessageBody

  const addMessageHandler = () => {
    props.dispatch(sendMessageAC())
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const body = e.currentTarget.value
    props.dispatch(updateNewMessageBodyAC(body))
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
