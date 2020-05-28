import React, { Component } from "react";

class Login extends Component {
    loginClick = (e) => {
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        e.preventDefault();
        if (username.value === "admin" && password.value === "admin") {
          console.log("Log In succesful!");
          window.location.href = "/userpage";
        } else {
          if (username.value === "" && password.value !== "") {
            console.log("username is mandatory!");
            alert(
              "If you fill inputs and click the button, it will automaticly redirect to the userpage"
            );
          } else if (username.value !== "" && password.value === "") {
            console.log("Password is mandatory!");
            alert(
              "If you fill inputs and click the button, it will automaticly redirect to the userpage"
            );
          } else {
            console.log("Phone or Email and Password cannot be empty!");
            alert(
              "If you fill inputs and click the button, it will automaticly redirect to the userpage"
            );
          }
        }
      };
  render() {
    return (
      <div className="text-center" style={{ width: "25rem" }}>
        <div className="card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">Fake Instagram</h5>
            <input
              type="text"
              id="username"
              className="form-control mb-3"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <input
              type="password"
              id="password"
              className="form-control mb-3"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
            <button onClick={this.loginClick} type="button" className="btn btn-primary">
              Log In
            </button>
          </div>
          <p>---------------------------OR---------------------------</p>
          <div className="card-body">
            <a href="#" className="card-link">
              Login with Fakebook
            </a>
            <br />
            <a href="#" className="card-link">
              Forgot Password?
            </a>
          </div>
        </div>
        <div>
            <p>Get the app.</p>

        </div>
      </div>
    );
  }
}

export default Login;
