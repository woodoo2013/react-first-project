import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b056e955-f282-4352-b6fe-b9e9a2109db5"
    }
})


export const usersAPI = {
    getUsers(count, page) {
        return axiosInstance.get(`users?count=${count}&page=${page}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return axiosInstance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },

}

export const authAPI = {
    auth() {
        return axiosInstance.get(`auth/me`)
        .then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
        .then(response => {
            return response.data;
        })
    }
}
