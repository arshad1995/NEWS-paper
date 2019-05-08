import React, { Component } from "react";
import "./login.css";

class Register extends Component {
  render() {
    return (
      <div className="app">
        <div className="login">
          <div className="sub">
            <p>
              <input type="text" placeholder="username" />
            </p>
            <br />
            <p>
              <input type="email" placeholder="email" />
            </p>
            <br />
            <p>
              <input type="password" placeholder="password" />
            </p>
            <br />
            <p>
              <button>Register</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
