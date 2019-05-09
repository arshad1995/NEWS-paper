import React, { Component } from "react";
import "./login.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    nameerror: "",
    passworderror: "",
    emailerror: ""
  };
  Register = () => {
    if (!this.state.name) {
      this.setState({ nameerror: "Name can't be blank" });
    }
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
      <div className="app">
        <div className="login">
          <div className="sub">
            <p>
              <input
                type="text"
                placeholder="username"
                onChange={c => this.setState({ name: c.target.value })}
              />
            </p>
            <br />
            <p className="name">{this.state.nameerror}</p>
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
              <button onClick={this.Register}>Register</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
