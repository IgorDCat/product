import axios from 'axios';
import {LOCALSTORAGE_USER_KEY} from '@/shared/const/localstorage';

export const api = axios.create({
    baseURL: __API__
})

api.interceptors.request.use((config) => {
    if(config.headers) {
        config.headers.authorization = localStorage.getItem(LOCALSTORAGE_USER_KEY) || ''
    }
    return config
})