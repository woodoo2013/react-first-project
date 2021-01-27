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
    },
    login(email, password, rememberMe) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return axiosInstance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
        .then(response => {
            return response.data;
        })
    },
    getProfileStatus(userId) {
      return axiosInstance.get(`profile/status/${userId}`)
          .then(response => {
              return response.data;
          })
    },
    updateProfileStatus(status) {
        return axiosInstance.put(`profile/status/`, {status: status})
            .then(response => {
                return response.data;
            })
    }
}
