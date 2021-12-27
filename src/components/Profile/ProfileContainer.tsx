import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";

type ProfileContainerType = MapStateType & mapDispatchType
type MapStateType = {
    profile: ProfileType | null
}

type mapDispatchType = {
    setUserProfile: (profile: ProfileType | null) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
           <Profile {...this.props} />
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateType => {
 return {
     profile: state.profilePage.profile
 }
}

const WithDataUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithDataUrlContainerComponent);
