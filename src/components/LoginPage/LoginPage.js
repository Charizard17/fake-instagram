import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import image from "./smartphone.png";

class LoginPage extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col">
            <img
              src={image}
              className="img-fluid"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col">
            <Login />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
