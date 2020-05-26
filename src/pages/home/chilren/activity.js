import React from 'react';
// import {Button,Input} from "antd"
import jpg from "../../images/activity.jpg"

function activity() {
  return (
    <div className="activity">
      <h3>近期活动</h3>
      <img src={jpg} alt="activity"/>
      <div className="activity_content">
        <a href="www.baidu.com" className="title">居家创意大赛——寻找平凡生活中的点滴创意</a>
        <p>报名参与活动获取奖品</p>
      </div>
    </div>
  );
}

export default activity;
