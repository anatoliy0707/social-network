import React from "react";
import {ActionsTypes, profilePageType} from "../../redux/state";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    state: profilePageType;
    dispatch: (action: ActionsTypes) => void
};

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.state.newPostText}
                     posts={props.state.posts}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
