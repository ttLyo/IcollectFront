import React, { Component } from "react"
import {Descriptions, Button } from "antd"
class personInfo extends Component {
    render(){
        return (
            <div className="personInfo">
                <h2>个人介绍</h2>
                <div className="description">
                    <Descriptions bordered>
                        <Descriptions.Item label="姓名">Zhou Maomao</Descriptions.Item>
                        <Descriptions.Item label="电话">1810000000</Descriptions.Item>
                        <Descriptions.Item label="居住地">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="详细地址" span={2}>
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
                        <Descriptions.Item label="职业">empty</Descriptions.Item>
                        <Descriptions.Item label="自述" span={3}>empty</Descriptions.Item>
                    </Descriptions>
                </div>
                <div className="btnNew">
                    <p>尝试发布全新内容！</p>
                    <Button size="large" type="primary">点击发布</Button>
                </div>
                
            </div>
        )
    }
}
export default personInfo