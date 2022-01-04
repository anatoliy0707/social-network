import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '2c859de2-2d1d-4c0a-9243-c7ccd793b6fc'
    }
})

export const usersAPI = {
    setUsers(pageSize: number = 1, currentPage: number = 10) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },

    setUnfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },

    setFollow(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data.resultCode)
    },
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    }
}


export const authAPI = {
    me() {
        return  instance.get(`auth/me`)
    }
}


