import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '2c859de2-2d1d-4c0a-9243-c7ccd793b6fc'
    }
})

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type SetUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
type UnfollowFollowResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type GetProfileResponseType = {
    aboutMe: string
    contacts: contactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string
        large: string
    }
    userId: number
}
export const usersAPI = {

     setUsers: async (pageSize: number = 1, currentPage: number = 10) => {
        return (await instance.get<SetUsersResponseType>(`users?count=${pageSize}&page=${currentPage}`))
            // .then(response => response.data)
            .data
    },

    setUnfollow(userId: number) {
        return instance.delete<UnfollowFollowResponseType>(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },

    setFollow(userId: number) {
        return instance.post<UnfollowFollowResponseType>(`follow/${userId}`, {})
            .then(response => response.data.resultCode)
    },
    getProfile(userId: string) {
        console.warn("Obsolete method please use profileAPI")
        return instance.get<GetProfileResponseType>(`profile/` + userId)
    }
}

type AuthGetMeResponseType = {
    data: {
        id: number
        login: string
        email: string
    }
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
export const authAPI = {
    me() {
        return instance.get<AuthGetMeResponseType>(`auth/me`)
    }
}

type GetStatusResponseType = {

}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<GetProfileResponseType>(`profile/${userId}`)
    },

    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}
