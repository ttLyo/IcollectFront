import React, { Component } from "react"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "../../../util/axios"
class login extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    login=(e)=>{
        console.log(e)
        let data=new FormData()
        data.append("username",e.username)
        data.append("password",e.password)
        
        axios.post("login",data).then(res=>{
            console.log(res)
            if(res.data.code===200){
                localStorage.setItem("token",res.data.data.token)
                localStorage.setItem("info",JSON.stringify(res.data.data.info))
                localStorage.setItem("username",e.username)
                window.location.hash="#/"
                window.location.reload()
            }
            
        })
    }
    render(){
        return (
            <div className="login">
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.login}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                        Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default login