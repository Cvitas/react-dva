/**  @Author: Chasen  @Date: 2018/12/19 18:18  @Description:  */


import request from '@/api';
const headers={
    'Content-Type': 'application/x-www-form-urlencoded;utf-8',
};

export  function login(body={}) {
    body.access_token = localStorage.access_token;
    return request('/api/login.do',{
        method: 'POST',
        headers: headers,
    })
}
