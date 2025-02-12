import axios from '@/services'

export function loginRequest(params) {
    return axios.request('login', {
        data: params.data
    })
}

export function getUser() {
    return axios.request('getUser')
}