import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import LoginComp from "./components/Login/login";
import Register from "./components/Login/Register";
import News from "./components/NewsCard/News";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            {/* <Route path="/" component={LoginComp} exact={true} /> */}
            <Route path="/" component={News} exact={true} />

            <Route path="/register" component={Register} />
            <Route path="/news" component={News} />
          </BrowserRouter>
        </div>
      </div>

      // </div>
    );
  }
}

export default App;
