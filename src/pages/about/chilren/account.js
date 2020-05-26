import {Layout, Menu, Button, Tabs, List, Form, Input, InputNumber, Timeline,Avatar } from 'antd';
import React, {Component} from "react";
import "antd/dist/antd.css";
import moment from 'moment';
import {Link} from "react-router-dom";
import itemjpg from "../../images/123.jpeg";
import '../about.scss';
const {TabPane} = Tabs
const {TextArea} = Input;

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];


class SiderDemo extends Component {
    constructor(){
        super()
        // console.log(localStorage.getItem("info"))
        this.state={
            user:{
                name:localStorage.getItem("username")
            },
            
        }
    }
    render() {
        const layout = {
            labelCol: {span: 2},
            wrapperCol: {span: 12},
        };
        const onFinish = values => {
            console.log('Success:', values);
        }
        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not validate email!',
                number: '${label} is not a validate number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };


        return (
            <div className="infomation">
                <Tabs tabPosition="left" style={{marginTop: '3em'}}>
                    <TabPane tab="账户信息" key="1">

                        <Form {...layout} initialValues={this.state.user}  onFinish={onFinish}  validateMessages={validateMessages}>
                            <Form.Item name='name' label="昵称">
                                <Input value={this.state.name}/>
                            </Form.Item>

                            <Form.Item name='area' label="地区">
                                <Input/>
                            </Form.Item>

                            <Form.Item name='phone' label="联系电话">
                                <Input/>
                            </Form.Item>

                            <Form.Item name='introduction' label="个人介绍">
                                <Input.TextArea/>
                            </Form.Item>

                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>

                    {/* <TabPane tab="付款及配送信息" key="2">
                        <Form {...layout}  onFinish={onFinish}  validateMessages={validateMessages}>
                            <Form.Item name='name' label="姓名">
                                <Input/>
                            </Form.Item>

                            <Form.Item name='area' label="地区">
                                <Input/>
                            </Form.Item>

                            <Form.Item name='address' label="收货地址">
                                <Input/>
                            </Form.Item>

                            <Form.Item name='card' label="银行卡号">
                                <Input/>
                            </Form.Item>

                            <Form.Item name='phone' label="联系电话">
                                <Input.TextArea/>
                            </Form.Item>

                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane> */}

                    <TabPane tab="项目" key="3">
                        <div className="btnNew" style={{display:'flex',justifyContent:'space-between'}}>
                            <p style={{fontSize:'2em'}}>尝试发布全新项目！</p>
                           <Link to="/creator"><Button size="large" type="primary">点击发布</Button></Link> 
                        </div>
                        <div className="join">
                            <h2>已发布项目</h2>
                            <div className="joinList">
                                {[1, 2, 3, 4].map((item) => (
                                    <Link to={"/detail/" + item} className="joinItem" key={item}>
                                        {/* <div> */}
                                        <img src={itemjpg} alt="img"/>
                                        <p className="title">some title</p>
                                        <p>￥200</p>
                                        <p>已完成/未完成</p>
                                        {/* </div> */}
                                    </Link>

                                ))}
                            </div>
                            <h2>收藏项目</h2>
                            <div className="joinList">
                                {[1, 2, 3, 4].map((item) => (
                                    <Link to={"/detail/" + item} className="joinItem" key={item}>
                                        {/* <div> */}
                                        <img src={itemjpg} alt="img"/>
                                        <p className="title">some title</p>
                                        <p>￥200</p>
                                        <p>已完成/未完成</p>
                                        {/* </div> */}
                                    </Link>

                                ))}
                            </div>
                            <h2>订阅项目</h2>
                            <div className="joinList">
                                {[1, 2, 3, 4].map((item) => (
                                    <Link to={"/detail/" + item} className="joinItem" key={item}>
                                        {/* <div> */}
                                        <img src={itemjpg} alt="img"/>
                                        <p className="title">some title</p>
                                        <p>￥200</p>
                                        <p>已完成/未完成</p>
                                        {/* </div> */}
                                    </Link>

                                ))}
                            </div>
                        </div>
                    </TabPane>

                    <TabPane tab="动态" key="4">
                        <div>
                            <h2 style={{marginBottom: '2em'}}>项目1</h2>
                            <Timeline>
                                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                            </Timeline>
                        </div>
                        <div>
                            <h2 style={{marginBottom: '2em'}}>项目2</h2>
                            <Timeline>
                                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                            </Timeline>
                        </div>
                    </TabPane>

                    <TabPane tab="消息" key="5">
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </TabPane>



                </Tabs>
            </div>
        )
    }

}

export default SiderDemo;