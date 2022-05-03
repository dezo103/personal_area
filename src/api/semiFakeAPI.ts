import axios, { AxiosResponse } from 'axios'

import {LoginParamsType, ResponseType} from '../types/DataTypes';


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const fakeAuthAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType>>(`posts`, data)
    },
    logout() {
        return instance.delete<ResponseType>(`posts/1`)
    }
}