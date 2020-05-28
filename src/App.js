import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import UserPage from "./components/UserPage/UserPage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/userpage" component={UserPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
