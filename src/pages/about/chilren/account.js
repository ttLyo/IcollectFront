import {Layout, Menu, Button, Tabs, List, Form, Input, InputNumber, Timeline,Avatar, message } from 'antd';
import React, {Component} from "react";
import "antd/dist/antd.css";
import {Link} from "react-router-dom";
import itemjpg from "../../images/123.jpeg";
import Productoin from "../../common/prodution"
import axios from "../../../util/axios"
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
    formRef = React.createRef();
    constructor(){
        super()
        this.state={
            projectList:[],
            commentList:[]
        }
    }
    onFill = (user) => {
        console.log(1,this.formRef.current)
        this.formRef.current.setFieldsValue({
          ...user
        });
      };
    componentDidMount(){
        this.getInfo()
    }
    getInfo=()=>{
        axios.get("getCommentByUid").then(res=>{
            // console.log(res)
            this.setState({commentList:res.data.data})
        })
        axios.get("getUserInfoByid").then(res=>{
            // console.log(1,res)
            this.setState({projectList:res.data.data.createdProject})
            if(this.formRef.current)
            this.onFill(res.data.data)
        })
    }
    setInfo=(data)=>{
        axios.post("setUserInfo",JSON.stringify(data)).then(res=>{
            // console.log(res)
            if(res.data.code==200){
                message.success("修改成功")
            }
            // this.setState({commentList:res.data.data})
        })
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

                        <Form  ref={this.formRef} {...layout}  onFinish={this.setInfo}  validateMessages={validateMessages}>
                            <Form.Item name='username' label="昵称">
                                <Input value="123" />
                            </Form.Item>

                            <Form.Item name='area' label="地区">
                                <Input />
                            </Form.Item>

                            <Form.Item name='tel' label="联系电话">
                                <Input/>
                            </Form.Item>

                            <Form.Item name='description' label="个人介绍">
                                <Input.TextArea />
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
                            {this.state.projectList.map((item, index) => (
                                <Productoin 
                                key={index}
                                id={item.pid}
                                img={item.image||itemjpg} 
                                title={item.name}
                                author={item.author} 
                                content={item.introduction} />
                                

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
                            dataSource={this.state.commentList}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href={"#/detail/"+item.pid}>评论 [{item.projectName}]</a>}
                                        description={item.content}
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