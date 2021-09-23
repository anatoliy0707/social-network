import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import { dialogsPageType } from "../../redux/state";

type DialogPropsType = {
  state: dialogsPageType;
};

function Dialogs(props: DialogPropsType) {
  const dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  const newMessageElement = React.createRef<HTMLTextAreaElement>()

  const addMessageHandler = () => {
      alert(newMessageElement.current?.value)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
        <div>
        <textarea ref={newMessageElement}/>
        <button onClick={addMessageHandler}>Add message</button>
        </div>
    </div>
  );
}

export default Dialogs;
