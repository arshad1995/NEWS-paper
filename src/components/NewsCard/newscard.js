import React from "react";
import "./newscard.css";

const NewsCard = props => {
  return (
    <div className="container">
      <div>
        <img src={props.urlToImage} />
      </div>
      <div className="container1">
        <div className="container2">{props.title}</div>
        <div className="container3">{props.description}</div>
        <div className="author">{props.author}</div>
      </div>
    </div>
  );
};

export default NewsCard;
