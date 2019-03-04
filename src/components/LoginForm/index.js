/**  @Author: Chasen  @Date: 2018/11/30 16:17  @Description:  */

import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const style = {};
style['login-form'] = {
    maxWidth: '300px',
    backgroundColor:'rgba(255,255,255,.2)',
    padding:'20px',
    borderTop:'2px solid #1bc840',
    borderRadius:'4px 4px'
}
// style['login-form-forgot'] = {
//     float: 'right'
// }
style['login-form-button'] = {
    width: '100%'
}
function Index(props) {
    const FormItem = Form.Item;
    const { getFieldDecorator } = props.form;
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                props.postSubmit(values);
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit} style={style['login-form']}>
            <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>记住登陆状态</Checkbox>
                )}
                {/*<a style={style['login-form-forgot']} href="">Forgot password</a>*/}
                <Button type="primary" htmlType="submit" style={style['login-form-button']}>
                    进入教室
                </Button>
                {/*Or <a href="">register now!</a>*/}
            </FormItem>
        </Form>
    );
}
export  default Form.create()(Index);