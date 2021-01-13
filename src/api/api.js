import * as axios from "axios";

const axoisInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b056e955-f282-4352-b6fe-b9e9a2109db5"
    }
})


export const usersAPI = {
    getUsers(count, page) {
        return axoisInstance.get(`users?count=${count}&page=${page}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return axoisInstance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    }
}
