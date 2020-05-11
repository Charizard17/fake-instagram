import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a
            className="navbar-brand"
            style={{marginLeft: "20%", fontFamily: "'Satisfy', cursive"}}
            href="#"
          >
            Fake Instagram
          </a>
          <form className="form-inline my-2 my-lg-0 navbar-center">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <ul className="navbar-nav ml-auto" style={{marginRight: "22%"}}>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
