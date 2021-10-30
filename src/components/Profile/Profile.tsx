import React from "react";
import {ActionsTypes, profilePageType} from "../../redux/store";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store?: RootStoreType
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
