import fetch from 'isomorphic-fetch'
import axios from 'axios'
import qs from 'qs';
import {prefix, suffix, timeout} from '../config'
import history from '../history.js'

// axios配置
const axiosBaseConfig = {
    baseURL: prefix,
    timeout: timeout,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    /*method: 'post',*/
    // 跨域请求，是否带上认证信息
    withCredentials: true, // default
    // http返回的数据类型
    // 默认是json，可选'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default
    // http请求返回状态码检查
    validateStatus: status =>
        status >= 200 && status < 300, // default
    // 请求数据预处理
    transformRequest: [(data, headers) => {
        // 加入token？
        let ret = '';
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
        //return qs.stringfy(data)
    }],
    // 返回数据预处理
    transformResponse: [(respData) => {
        if(respData === null){
            console.log(1);
            history.push('/login');
        }else{
            return respData;
        }
        // 检查返回status值
        // if (typeof respData.status !== 'undefined') {
        //   if (respData.status === 1) {
        //     return respData
        //   }
        //   throw new Error(respData.errMsg || 'respData.status不为0')
        // }
    }
    ],
}
// axios 实例
const axiosInstance = axios.create(axiosBaseConfig)

// 拦截器
axiosInstance.interceptors.request.use(req => req, error =>
    // 当请求错误时
    Promise.reject(error))

axiosInstance.interceptors.response.use(resp => resp, (error) => {
    // 当返回错误时
    if (axios.isCancel(error)) {
        return Promise.reject(new Error('请求被取消'))
    }
    if ('code' in error && error.code === 'ECONNABORTED') {
        return Promise.reject(new Error('请求超时'))
    }
    return Promise.reject(error)
})

export default axiosInstance;