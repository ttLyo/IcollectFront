import React, { Component } from "react"
import { Tabs, Comment, Tooltip, List, Descriptions, Form, Button, Input, message  } from 'antd';
import moment from 'moment';
import axios from "../../../util/axios"
import pic from "../../images/user.jpg"
const {TabPane} = Tabs
const { TextArea } = Input;
let comment=(author,avatar,content,time)=>(
    {
        author,
        avatar: avatar||pic,
        content: (
        <p>
            {content}
        </p>
        ),
        datetime: (
        <Tooltip
            title={moment()
            .subtract(1, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
            <span>
            {moment(time,"YYYY-MM-DD HH:mm:ss")
                .subtract(0, 'days')
                .fromNow()}
            </span>
        </Tooltip>
        ),
    }
)
class information extends Component {
    constructor(){
        super()
        
        this.state={
            commentList:[]
        }
    }
    componentDidMount(){
        this.getInfo()
    }
    getInfo=()=>{
         axios.get("getComment?pid="+this.props.pid).then(res=>{
            // console.log(res)
            let commentList=[]
            for(let i of res.data.data){
                commentList.push(comment(i.username,'',i.content,i.ctime))
            }
            // console.log(commentList)
            this.setState({commentList})
        })
    }
    addComent=(text)=>{
        let data={pid:this.props.pid,content:text.text}
        axios.post("addComment",JSON.stringify(data)).then(res=>{
            // console.log(res)
            if(res.data.code==200){
                message.success("成功")
                this.getInfo()
            }
            
        })
    }
    render(){
        return (
            <div className="infomation">
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="项目背景" key="1">
                        <h3>项目背景</h3>
                        <p>{this.props.introduction}</p>
                    </TabPane>
                    <TabPane tab="留言" key="2">
                        <List
                            className="comment-list"
                            header={`${this.state.commentList.length} replies`}
                            itemLayout="horizontal"
                            dataSource={this.state.commentList}
                            renderItem={item => (
                            <li>
                                <Comment
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                                />
                            </li>
                            )}
                        />
                        <Form onFinish={this.addComent}>
                            <Form.Item name="text">
                                <TextArea rows={4}  />
                                </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit"  type="primary">
                                    添加评论
                                </Button>
                            </Form.Item>
                        </Form>

                    </TabPane>
                    {/* <TabPane tab="作者信息" key="3">
                        <Descriptions title="作者信息" layout="vertical">
                            <Descriptions.Item label="姓名">Zhou Maomao</Descriptions.Item>
                            <Descriptions.Item label="电话">1810000000</Descriptions.Item>
                            <Descriptions.Item label="居住地">Hangzhou, Zhejiang</Descriptions.Item>
                            <Descriptions.Item label="详细地址" span={2}>
                            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Descriptions.Item>
                            <Descriptions.Item label="详情">empty</Descriptions.Item>
                        </Descriptions>
                    </TabPane> */}
                </Tabs>
            </div>
        )
    }
}
export default information