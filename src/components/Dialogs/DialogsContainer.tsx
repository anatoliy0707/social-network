import React, {ChangeEvent} from "react";
import {ActionsTypes, dialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {RootStoreType} from "../../redux/redux-store";
import StoreContext from "../../StoreContext";

type DialogPropsType = {
    // store: RootStoreType
};

function DialogsContainer(props: DialogPropsType) {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const dialogs = store.getState().dialogsPage

                const addMessageHandler = () => {
                    store.dispatch(sendMessageAC())
                }
                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }
                return (
                    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={addMessageHandler}
                             dialogsPage={dialogs}/>
                )
            }}
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;
