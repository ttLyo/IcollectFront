import React from 'react';
import { Link } from 'react-router-dom'
import './common.scss';
import url from "../../util/url"
function production(props) {
  return (
    <Link to={"/detail/"+props.id} className="production">
      <div className="img">
        <img src={url+"image/get/project/"+props.id+"/"+props.img} alt="img"/>
      </div>
      <div className="title">{props.title}</div>
      <div className="author">{props.author}</div>
      <div className="content">{props.content}</div>
    </Link>
  );
}

export default production;
