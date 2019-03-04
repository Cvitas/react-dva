/**  @Author: Chasen  @Date: 2018/12/19 18:28  @Description:  */

const Login = () => import ( /* webpackChunkName: "Login" */ "@/containers/Login");

export const routes = [
    {
        path: '/Login',
        name: 'login',
        component: Login,
        layout: false,
        models: () => [ import(/* webpackChunkName: "LoginModel" */'@/models/Login') ],
    }
];