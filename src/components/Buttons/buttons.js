import React from "react";

import "./buttons.css";

const Buttons = props => {
  return (
    <button
      className="theindiantime"
      onClick={() => props.fetch(props.channel_id)}
    >
      {props.newschannel}
    </button>
  );
};

export default Buttons;
