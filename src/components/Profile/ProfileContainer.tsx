import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter, Redirect} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type ProfileContainerType = MapStateType & mapDispatchType
type MapStateType = {
    profile: ProfileType | null
}

type mapDispatchType = {
    getUserProfile: (userId: string) => void
}

type PathParamsType = {
    userId: string
}

type TProps = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<TProps> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {

        // if (!this.props.isAuth) return <Redirect to="/login"/>

        return (
            <Profile {...this.props} />
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
    }
}

const WithDataUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withAuthRedirect(WithDataUrlContainerComponent));
