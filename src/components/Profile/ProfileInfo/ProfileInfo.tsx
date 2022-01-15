import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";


type TProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

function ProfileInfo(props: TProfileInfoProps) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"*/}
            {/*        alt="img"*/}
            {/*    />*/}
            {/*</div>*/}
            <img src={props.profile.photos.large} alt=""/>
            <div className={s.descriptionBlock}>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;
