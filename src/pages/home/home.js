import React from 'react';
import './home.scss';
import Nav from "./chilren/nav"
import Activity from "./chilren/activity"
import Hot from "./chilren/hot"
import Categaries from "./chilren/categories"
import { Anchor } from 'antd';

const { Link } = Anchor;
var handleClick=(e)=>{
  e.preventDefault();
}
function home() {
  let categoriesTypes=["绘画","影视","手工艺","食品","文字"]
  return (
    <div className="home">
        <Nav />
        <Activity />
        <Hot />
        <Categaries />
        <div className="anchor">
          <Anchor affix={true} offsetTop={window.innerHeight/2-200} onClick={handleClick}>
            {categoriesTypes.map(item=>(
              <Link href={"#"+item} title={item} key={item} />
            ))}
          </Anchor>
        </div>
        
    </div>
  );
}

export default home;
