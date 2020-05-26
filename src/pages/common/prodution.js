import React from 'react';
import { Link } from 'react-router-dom'
import './common.scss';

function production(props) {
  return (
    <Link to={"/detail/"+props.id} className="production">
      <img src={props.img} alt="img"/>
      <div className="title">{props.title}</div>
      <div className="author">{props.author}</div>
      <div className="content">{props.content}</div>
    </Link>
  );
}

export default production;
