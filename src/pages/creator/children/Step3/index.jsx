import React from 'react';
import {InboxOutlined} from '@ant-design/icons';
import {Upload} from 'antd';
const upload=(e)=>{
  console.log(1,e)
  let data = new FormData()
  data.append("pid",e.data.pid)
  data.append("type",e.data.type)
}
const Step3 = props => {
  console.log(props)
  return (
    <div style={{display:'flex',justifyContent:'center',justifyContent:"space-around"}}>
      <div style={{width: '40%'}}>
        <Upload.Dragger {...props.config}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
          <p className="ant-upload-text">点击或拖动项目文件到此区域上传</p>
          {/* <p className="ant-upload-hint">
            支持一个文件或多个文件上传
          </p> */}
        </Upload.Dragger>
      </div>
      <div style={{width: '40%'}}>
        <Upload.Dragger {...props.config1}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
          <p className="ant-upload-text">上传二维码</p>
        </Upload.Dragger>
      </div>

    </div>
  )
};

export default Step3;
