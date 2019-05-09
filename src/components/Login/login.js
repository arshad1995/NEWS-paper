import React, { Component } from "react";
import "./login.css";

class LoginComp extends Component {
  state = {
    email: "",
    password: "",
    passworderror: "",
    emailerror: ""
  };
  login = () => {
    if (this.state.password.length < 8) {
      this.setState({
        passworderror: "Password must contain atleast 8 characters "
      });
    }
    if (!this.state.email.includes("@")) {
      this.setState({ emailerror: "Enter valid email Id" });
    }
  };
  render() {
    return (
      <div className="login">
        <div className="sub">
          <p>
            <input
              type="email"
              placeholder="email"
              onChange={a => this.setState({ email: a.target.value })}
            />
          </p>
          <br />
          <p className="email">{this.state.emailerror}</p>
          <p>
            <input
              type="password"
              placeholder="password"
              onChange={b => this.setState({ password: b.target.value })}
            />
          </p>
          <br />
          <p className="password">{this.state.passworderror}</p>
          <p>
            <button onClick={this.login}>Login</button>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginComp;
