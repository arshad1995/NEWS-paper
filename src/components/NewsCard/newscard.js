import React, { Component } from "react";
import "./newscard.css";

class NewsCard extends Component {
  render() {
    return (
      <div className="newscard">
        <img src={this.props.src} />

        <p className="details">{this.props.details}</p>
        <p className="author">{this.props.name}</p>
        <p className="headline">{this.props.headline}</p>
      </div>
    );
  }
}

export default NewsCard;
