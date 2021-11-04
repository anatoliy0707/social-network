import React, {ChangeEvent} from "react";

import {DialogsActionsTypes, DialogsInitialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";



type MapStateType = {
    dialogsPage: DialogsInitialStateType
}

type MapDispatchType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: DialogsActionsTypes) => void): MapDispatchType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
