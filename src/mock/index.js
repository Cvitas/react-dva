/**  @Author: Chasen  @Date: 2018/11/23 16:22  @Description:  */

var Mock = require('mockjs')

/*模拟删除数据的方式*/
var arr=[
    {name:'fei',age:20,id:1},
    {name:'liang',age:30,id:2},
    {name:'jun',age:40,id:3},
    {name:'ming',age:50,id:4}
]

Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

Mock.mock('/api/getToken.do',function(options){
    const res = {
        code:200,
        result:Math.random()*100,
        message:"ok"
    }
    return res;//返回这个数组,也就是返回处理后的假数据
});
Mock.mock('/api/login.do',{
    code:200,
    result:{
        userId:'@string(32)',
        userName:'@cname'
    },
    message:"ok"
});
export default Mock