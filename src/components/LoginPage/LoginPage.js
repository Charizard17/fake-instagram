import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

class LoginPage extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">1 of 2</div>
          <div class="col">
            <Login />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
