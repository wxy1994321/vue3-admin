import axios from 'axios';
import localCache from 'utils/localCache';

export class network {
    instance = null
    showLoading = true
    constructor(config) {
        this.instance = axios.create(
            config
        );
        // 添加请求拦截器
        this.instance.interceptors.request.use((request) => {
            const token = localCache.getCache("token")
            if (token) {
                request.headers.Authorization = `Bearer ${token}`
            }
            return request;
        }, (error) => {
            return Promise.reject(error);
        });
        // 添加响应拦截器
        this.instance.interceptors.response.use((response) => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        });
    }
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res)
            })
        })
    }
    get(config) {
        return this.request({
            method: "get",
            ...config
        })
    }
    post(config) {
        return this.request({
            method: "post",
            ...config
        })
    }
    delete(config) {
        return this.request({
            method: "delete",
            ...config
        })
    }
    patch(config) {
        return this.request({
            method: "patch",
            ...config
        })
    }
}