import React, { Component } from "react";
import "./login.css";

class LoginComp extends Component {
  render() {
    return (
      <div className="login">
        <div className="sub">
          <p>
            <input type="text" placeholder="username" />
          </p>
          <br />
          <p>
            <input type="password" placeholder="password" />
          </p>
          <br />
          <p>
            <button>Login</button>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginComp;
