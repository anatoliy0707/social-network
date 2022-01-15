import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type TProfileProps = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

function Profile(props: TProfileProps) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer  />
        </div>
    );
}

export default Profile;
