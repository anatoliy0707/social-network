import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";

type ProfileContainerType = MapStateType & mapDispatchType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
           <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

type MapStateType = {
    profile: ProfileType | null
}

type mapDispatchType = {
    setUserProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
 return {
     profile: state.profilePage.profile
 }
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
