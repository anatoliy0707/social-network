import React from "react";
import Header from "./Header";
import {initialAuthStateType, setUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";

type MapStateType = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchType = {
    setUserData: (userId: number, login: string, email: string) => void
}
type TPropsHeaderContainer = MapStateType & MapDispatchType

class HeaderContainer extends React.Component<TPropsHeaderContainer> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setUserData(id, login, email)
                }
            })
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);
