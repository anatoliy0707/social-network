import React from "react";
import Header from "./Header";
import {getAuthUserData, } from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateType = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchType = {
    getAuthUserData: () => void
}
type TPropsHeaderContainer = MapStateType & MapDispatchType

class HeaderContainer extends React.Component<TPropsHeaderContainer> {

    componentDidMount(): void {
    this.props.getAuthUserData()
    }

    render(): React.ReactNode {
        return (
            <Header {...this.props} />
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
