import React from 'react';
import './category.scss';
import Info from "./children/info"
import ItemList from "./children/itemList"
// import ItemList from "./chilren/itemList"
// import Hot from "./chilren/hot"

function category(props) {
  return (
    <div className="home">
      <Info linkId={props.match.params.id} />
      <ItemList linkId={props.match.params.id}/>
        {/* <Activity />
        <Hot /> */}
        
    </div>
  );
}

export default category;
