import React, {useEffect, useState} from 'react';
import {message, Card, Steps} from 'antd';
import Step1 from './children/Step1';
import Step2 from './children/Step2';
import Step3 from './children/Step3';
import styles from './style.less';
import axios from "../../util/axios"
import url from "../../util/url"

const {Step} = Steps;



  

const Creator = ({current}) => {
  const [stepComponent, setStepComponent] = useState(<Step1/>);
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    const {step, component} = getCurrentStepAndComponent(current);
    setCurrentStep(step);
    setStepComponent(component);
  }, [current]);

  const next = currentStep => {
    if (currentStep < 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  var pid;
  var upConfig={
    action:url+"image/upload/project",
    name:"img",
    accept:"image/jpeg,image/png",
    headers:{"token":localStorage.getItem("token")},
    data:{
      pid:"bde95294-ebac-4c8b-bf8c-9a875f5a373f",
      type:"image",
    }
  }
  var upConfig1={
    action:url+"image/upload/project",
    name:"img",
    accept:"image/jpeg,image/png",
    headers:{"token":localStorage.getItem("token")},
    data:{
      pid:"bde95294-ebac-4c8b-bf8c-9a875f5a373f",
      type:"qrCode"
    }
  }
  const getCurrentStepAndComponent = current => {
    switch (current) {
      case 'confirm':
        return <Step2/>;
  
      case 'result':
        return {
          step: 2,
          component: <Step3 config={upConfig} config1={upConfig1} />,
        };
  
      case 'info':
      default:
        return {
          step: 0,
          component: <Step1/>,
        };
    }
  };
  const add = (e)=>{
    let user = JSON.parse(localStorage.getItem("info"))
    e.authorID = user.id
    e.author = user.username
    e.startTime = e.time[0].format("YYYY-MM-DD hh:mm:ss")
    e.endTime = e.time[1].format("YYYY-MM-DD hh:mm:ss")
    console.log(e)
    axios.post("project/add",JSON.stringify(e)).then(res=>{
      console.log(res)
      if(res.data.code==200){
          message.info("成功",2)
          // upConfig.data.pid=res.data.data.pid
          // upConfig1.data.pid=res.data.data.pid
          localStorage.setItem("pid",res.data.data.pid)
          next(currentStep)
      }
    })
  }
  const switchStep = currentStep => {
    switch (currentStep) {
      case 0:
        return <Step1 finish={add}/>;
      case 1:
        return <Step3 config={upConfig} config1={upConfig1}  />;
      // case 2:
      //   return <Step3/>;
    }
  };
  return (
      <div style={{display:"flex", justifyContent:"center"}}>
    <Card bordered={false} style={{width:"800px"}}>
    <div  style={{height:"5em"}}></div>
      <Steps style={{marginBottom:"48px"}} current={currentStep} onChange={current => setCurrentStep(current)} className={styles.steps}>
        <Step title="填写项目信息"/>
        {/* <Step title="填写背景故事"  finish={setData2}/> */}
        <Step title="附件上传"/>
      </Steps>
      {switchStep(currentStep)}
      {/* <div style={{display: 'flex', justifyContent: 'center', marginTop: '3em'}}>
        {currentStep === 1 ? <Button onClick={add} type="primary">提交</Button> :
          <Button onClick={() => next(currentStep)} type="primary">下一步</Button>}
      </div> */}
    </Card>
    </div>
  );
};

export default Creator
;
