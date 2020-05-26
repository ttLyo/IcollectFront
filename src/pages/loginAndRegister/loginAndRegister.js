import React, { Component } from "react"
import { Tabs } from 'antd';
import "./loginAndRegister.scss"
import Login from "./children/login"
import Register from "./children/register"
const { TabPane } = Tabs;
class loginAndRegister extends Component {
    render(){
        return (
            <div className="loginAndRegister">
                <Tabs type="card">
                    <TabPane tab="登录" key="1" className="login">
                        <Login />
                    </TabPane>
                    <TabPane tab="注册" key="2" className="register">
                        <Register />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default loginAndRegister