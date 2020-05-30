import React from 'react';
import {Button,Input, Menu, Dropdown} from "antd"
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './common.scss';
const {Search} = Input
const logOut=()=>{
  localStorage.setItem("username","")
  window.location.hash="#/"
  window.location.reload()
}
let username=localStorage.getItem("username")
const menu = (
  <Menu>
  <Menu.Item>
    <Link className="ant-dropdown-link" to="/creator">发布项目</Link>
  </Menu.Item>
  <Menu.Item>
    <Link className="ant-dropdown-link" to={"/person/"+username}>个人主页</Link>
  </Menu.Item>
    <Menu.Item>
      <a onClick={logOut}>
        退出登录
      </a>
    </Menu.Item>
  </Menu>)
  
function goSearch(key){
  window.location.hash="#search/"+encodeURIComponent(key)
  window.location.reload()
}
function header() {
  let person=username===""?
  (<Link to="/loginAndRegister"><Button className="btn_login" type="link">登录/注册</Button></Link>):
  (<Dropdown overlay={menu} className="btn_login">
      <Button>{username}<DownOutlined /></Button>
  </Dropdown>)

  return (
    <div className="header">
        <Link to="/"><span className="web_name">ICOLLECT</span></Link>
        {person}
        <Search className="search" onSearch={goSearch} ></Search>
    </div>
  );
}

export default header;
