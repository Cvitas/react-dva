/** @Author: Chasen @Date: 2018/11/23 10:12
 * @Description: 请求接口地址
 * */

const urls = new Proxy({
    getToken: "rms/getToken.do",
    login: "/OnlineClass/class/room/loginCheck.do",
},()=>{});

export default urls