import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type TProfileProps = {
    profile: ProfileType | null
}

function Profile(props: TProfileProps) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  />
        </div>
    );
}

export default Profile;
