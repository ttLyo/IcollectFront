import React from 'react';
import {Button, DatePicker, Form, Input, Select, Upload, message} from 'antd';
import styles from './index.less';
import {MoneyCollectOutlined, UploadOutlined} from '@ant-design/icons';

const {Option} = Select;
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
const Step1 = (props) => {

const finish=(e)=>{
  for(let i in e){
    if(!e[i]){
      message.warning("信息不完整",2)
      return false
    }
  }
  props.finish(e)
}
  const [form] = Form.useForm();
  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        layout="horizontal"
        className={styles.stepForm}
        onFinish={finish}
        hideRequiredMark
      >
        <Form.Item
          label="项目名"
          name="name"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="分类"
          name="category">
          <Select>
            <Option value="1">绘画</Option>
            <Option value="2">影视</Option>
            <Option value="3">手工艺</Option>
            <Option value="4">食品</Option>
            <Option value="5">文字</Option>
          </Select>
        </Form.Item>
        <Form.Item label="项目介绍" name="introduction">
          <Input.TextArea/>
        </Form.Item>
        <Form.Item label="目标金额" name="targetMoney">
          <Input addonBefore={<MoneyCollectOutlined/>}/>
        </Form.Item>
        <Form.Item
          label="起止时间"
          name="time"
        >
          <DatePicker.RangePicker
            showTime={{format: 'HH:mm'}}
            format="YYYY-MM-DD HH:mm"
            onChange={() => {
            }}
            onOk={()=>{}}
          />
        </Form.Item>
        {/* <Form.Item>
          
        </Form.Item> */}
        <div style={{textAlign:"center"}}>
          <Button  htmlType="submit" type="primary">下一步</Button>
        </div>
        
      </Form>
    </>
  );
};

export default Step1;
