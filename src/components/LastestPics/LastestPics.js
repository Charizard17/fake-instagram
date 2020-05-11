import React, { Component } from "react";

class LastestPics extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col-5">
              <div
                className="card border-white mb-3 d-inline-flex"
                style={{width: "32%"}}
              >
                <span
                  className="bg-dark rounded-circle mx-auto"
                  style={{width: "4rem", height: "4rem"}}
                ></span>
                <span>asda</span>
              </div>
              <div
                className="card border-white mb-3 d-inline-flex"
                style={{width: "32%"}}
              >
                <span
                  className="bg-dark rounded-circle mx-auto"
                  style={{width: "4rem", height: "4rem"}}
                ></span>
                <span>qweq</span>
              </div>
              <div
                className="card border-white mb-3 d-inline-flex"
                style={{width: "32%"}}
              >
                <span
                  className="bg-dark rounded-circle mx-auto"
                  style={{width: "4rem", height: "4rem"}}
                ></span>
                <span>asda</span>
              </div>
            </div>
            <div className="col-7"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LastestPics;
