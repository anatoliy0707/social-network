import React from "react";

import {DialogsActionsTypes, DialogsInitialStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



type MapStateType = {
    dialogsPage: DialogsInitialStateType
    isAuth: boolean
}

type MapDispatchType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs))

export default DialogsContainer;
