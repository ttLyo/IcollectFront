import React from 'react';
import {Button} from "antd"
import { Link } from 'react-router-dom'
// import './home.css';

function nav() {
  return (
    <div className="nav">
        <Link to="/category/1"><Button type="link" className="btnNav">绘画</Button></Link>
        <Link to="/category/2"><Button type="link" className="btnNav">影视</Button></Link>
        <Link to="/category/3"><Button type="link" className="btnNav">手工艺</Button></Link>
        <Link to="/category/4"><Button type="link" className="btnNav">食品</Button></Link>
        <Link to="/category/5"><Button type="link" className="btnNav">文字</Button></Link>
    </div>
  );
}

export default nav;
