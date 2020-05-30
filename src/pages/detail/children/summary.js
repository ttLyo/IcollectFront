import React, { Component } from "react"
import { Carousel, Button, Modal, InputNumber, message } from 'antd';
import axios from "../../../util/axios"
import url from "../../../util/url"
class summary extends Component {
    constructor(){
        super()
        this.state={
            IsShowSupport:false,
            money:100,
        }
    }
    handleCancel=()=>{
        this.setState({IsShowSupport:false})
    }
    showSupport=()=>{
        this.setState({IsShowSupport:true})
    }
    support=()=>{
        if(localStorage.getItem("username")==""){
            message.info("您未登录",2)
        }
        let data={
            pid:this.props.pid,
            donor:JSON.parse(localStorage.getItem("info")).id ,
            donee:this.props.authorID,
            money:this.state.money
        }
        console.log(data)
        axios.post("addDonation",JSON.stringify(data)).then(res=>{
            console.log(res)
            if(res.data.code==200){
                message.info("感谢您的支持",2)
                this.setState({IsShowSupport:false})
                this.props.update(res.data.data.pid)
            }
        })
    }
    handleChange=(e)=>{
        // console.log(e)
        this.setState({money:e})
    }
    render(){
        return (
            <div className="summary">
                <div className="carousel" >
                <div>
                <img className="image" src={url+"image/get/project/"+this.props.pid+"/"+this.props.image}></img>
                </div>
                </div>
                <div className="titleInfo">
                    <h3>目标:</h3>
                    <h2 className="target"> ￥{this.props.targetMoney}</h2>
                    <h3>已募集:</h3>
                    <h2 className="now">￥{this.props.currentMoney}</h2>
                    <Button block size="large" onClick={this.showSupport}>支持作品</Button>
                    <h3 className="timeLeft">截止时间: {this.props.endTime}</h3>
                </div>
                <Modal width={400}
                    title="支持作品"
                    visible={this.state.IsShowSupport}
                    onOk={this.support}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="确定"
                    >
                    <p className="thancks">感谢您的支持！</p>
                    <img style={{width:"50%"}} src={url+"image/get/project/"+this.props.pid+"/"+this.props.qrCode}></img><br />
                    支持金额：￥<InputNumber min={1} value={this.state.money} onChange={this.handleChange} />
                </Modal>
            </div>
        )
    }
}
export default summary