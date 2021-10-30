import React, {ChangeEvent} from "react";
import {ActionsTypes, dialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {RootStoreType} from "../../redux/redux-store";

type DialogPropsType = {
    store: RootStoreType
};

function DialogsContainer(props: DialogPropsType) {

    const dialogs = props.store.getState().dialogsPage

    const addMessageHandler = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={addMessageHandler} dialogsPage={dialogs}/>
    );
}

export default DialogsContainer;
