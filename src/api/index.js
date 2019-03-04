/** @Author: Chasen @Date: 2018/11/23 10:12
 * @Description: 请求参数初始化
 * */

import axios from 'axios';
import * as globalCode from '@/constants/globalCode';
import history from '@/routes/history';
if(process.env.NODE_ENV === 'development'){
    require('@/mock')
}
const instance = axios.create({
    //当创建实例的时候配置默认配置
    baseURL: '',
    timeout: 30000,
});
// 实例创建之后修改配置
//...
//添加请求拦截器
instance.interceptors.request.use(function(config){
    //loading start
    return config;
},function(error){
    //loading destroy
    //请求错误时做些事
    return Promise.reject(error);
});

//添加一个响应拦截器
instance.interceptors.response.use(function (response) {
    // 1.成功
    const res = response.data;
    if (res.code === globalCode.SUCCESS) {
        //loading destroy
        return res;
    }

    // 2.session过期
    if (res.code === globalCode.TIMEOUT) {
        history.push('/Login');
        return  Promise.reject({
            message: '登陆session超时'
        })
    }

    if (res.code === globalCode.ERROR) {
        return  Promise.reject({
            message: res.message
        })
    }

    // 其他失败，比如校验不通过等
    return Promise.reject(response.data);
}, function (error) {
    // 4.系统错误，比如500、404等
    //history.push('/page3');
    return Promise.reject({
        message: error.message
    });
});

export default instance;