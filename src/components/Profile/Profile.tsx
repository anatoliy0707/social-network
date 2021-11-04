import React from "react";


import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../redux/redux-store";

type ProfilePropsType = {
    store?: AppStateType
    // state: profilePageType;
    // dispatch: (action: ActionsTypes) => void
};

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer  />
        </div>
    );
}

export default Profile;
