import axios from 'axios'

class Axios {

    constructor(options) {
        this.options = options
        this.instance = axios.create(options)
        this.setupInterceptors()
    }

    setupInterceptors() {
        this.instance.interceptors.request.use((config) => {
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        this.instance.interceptors.response.use((response) => {
            if (response.status >= 200 && response.status < 300)  {
                return response
            } else if (response.status === 401) {

                return Promise.reject(response);
            } else {
                return Promise.reject(response);
            }
        }, (error) => {
            return Promise.reject(error);
        })
    }

    async request(url, config) {
        return this.instance.request({url, ...config})
            .then((res) => {
                return res
            })
            .catch((e) => {
                return { data: null }
            })
    }

}

const _axios = new Axios({
    baseURL: '/mock/',
    timeout: 30000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    withCredentials: true
})

export default _axios