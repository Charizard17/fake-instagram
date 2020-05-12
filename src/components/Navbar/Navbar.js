import React, { Component } from "react";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          style={{ height: "50px" }}
        >
          <a
            className="navbar-brand ml-3"
            style={{
              fontFamily: "'Shadows Into Light', cursive",
            }}
            href="#"
          >
            <h2>Fake Instagram</h2>
          </a>
          <form className="form-inline my-2 my-lg-0 navbar-center">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="&#x1f50d; Search"
              aria-label="Search"
            />
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <span
                  className="badge badge-primary"
                  style={{ fontSize: "17px" }}
                >
                  Log In
                </span>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <span
                  className="badge badge-light text-primary"
                  style={{ fontSize: "17px" }}
                >
                  Sign Up
                </span>
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>

          <select>
            <option value="" selected="selected">
              Select
            </option>

            <option value="/">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="&#x1f50d; Search"
                aria-label="Search"
              />
            </option>
            <option value="/">
              <a className="nav-link" href="#">
                <span
                  className="badge badge-primary"
                  style={{ fontSize: "17px" }}
                >
                  Log In
                </span>
                <span className="sr-only">(current)</span>
              </a>
            </option>
            <option value="/">
              <a className="nav-link" href="#">
                <span
                  className="badge badge-light text-primary"
                  style={{ fontSize: "17px" }}
                >
                  Sign Up
                </span>
                <span className="sr-only">(current)</span>
              </a>
            </option>
          </select>
        </nav>
      </div>
    );
  }
}

export default Navbar;
