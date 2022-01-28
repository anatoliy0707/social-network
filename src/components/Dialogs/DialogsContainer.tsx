import React from "react";
import {DialogsInitialStateType, sendMessage,} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateType = {
    dialogsPage: DialogsInitialStateType
    isAuth: boolean
}

type MapDispatchType = {
    sendMessage: (message: string) => void
}

export type DialogPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)
