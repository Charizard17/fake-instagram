import React, { Component } from "react";
import faker from "faker";

let count = 4;
class LastestPics extends Component {
  render() {
    let images = [];
    for (let i = 0; i < count; i++) {
      let randomImages = faker.image.avatar();
      let randomText = faker.lorem.word();
      images.push(
        <div
          className="card border-white mb-3 d-inline-flex"
          style={{ width: "100px" }}
        >
          <img
            className="bg-dark rounded-circle mx-auto"
            style={{ width: "64px", height: "64px" }}
            src={randomImages}
            alt="random images"
          ></img>
          <span>{randomText}</span>
        </div>
      );
    }
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col-5">{images}</div>
            <div className=""></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LastestPics;
