import React, { Component } from "react"
import { Form, Input, Button, Checkbox } from 'antd';
import axios from "../../../util/axios"
const formItemLayout = {

    labelCol: {
      xs: { span: 24 },
      sm: { span: 6,offset:2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 20,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 6,
      },
    },
  };

class register extends Component {
    register=(e)=>{
        console.log(e)
        let data={
            username:e.username,
            password:e.password
        }
        axios.post("login",JSON.stringify(data)).then(res=>{
            console.log(res)
        })
    }
    render(){
        return (
            <div className="register">
                <Form
                {...formItemLayout}
                // form={form}
                name="register"
                onFinish={register}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                scrollToFirstError
                >
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                        Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default register