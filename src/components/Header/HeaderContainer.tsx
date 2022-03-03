import React from "react";
import Header from "./Header";
import { logOut,} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateType = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchType = {
    
    logOut: () => void
}
type TPropsHeaderContainer = MapStateType & MapDispatchType

class HeaderContainer extends React.Component<TPropsHeaderContainer> {

    

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

export default connect(mapStateToProps, { logOut})(HeaderContainer);
