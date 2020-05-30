import React from 'react';
import {InboxOutlined} from '@ant-design/icons';
import {Upload, Button, message} from 'antd';
import { Link } from 'react-router-dom';

const handleChange=(e)=>{
  console.log(e)
  if(!e.event){
    message.info("成功")
    setTimeout(() => {
      // window.location.hash="#/"
    }, 100);
    
  }
}

const Step3 = props => {
  props.config.data.pid=localStorage.getItem("pid")
  props.config1.data.pid=localStorage.getItem("pid")
  console.log(props)
  return (
    <div>
    <div style={{display:'flex',justifyContent:'center',justifyContent:"space-around"}}>
      <div style={{width: '40%'}}>
        <Upload.Dragger {...props.config} >
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
          <p className="ant-upload-text">点击项目文件到此区域上传</p>
          {/* <p className="ant-upload-hint">
            支持一个文件或多个文件上传
          </p> */}
        </Upload.Dragger>
      </div>
      <div style={{width: '40%'}}>
        <Upload.Dragger {...props.config1} onChange={handleChange}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
          <p className="ant-upload-text">上传二维码</p>
        </Upload.Dragger>
      </div>
      <br />
    </div>

    </div>
  )
};

export default Step3;
