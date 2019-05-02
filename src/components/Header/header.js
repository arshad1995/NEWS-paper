import React from "react";
import "./header.css";

const Header = props => {
  return (
    <div className="news">
      <p>{props.name}</p>
    </div>
  );
};
export default Header;
