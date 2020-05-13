import React, { Component } from "react";
import faker from "faker";
import "./LastestPics.css";

let count = 3;
class LastestPics extends Component {
  render() {
    let images = [];
    for (let i = 0; i < count; i++) {
      let randomImages = faker.image.avatar();
      let randomText = faker.lorem.word();
      let uuid = faker.random.uuid();
      images.push(
        <div className="col-sm" key={uuid}>
          <div className="card border-none latestimgdiv">
            <img
              className="rounded-circle m-auto latestimg"
              src={randomImages}
              alt="random images"
            ></img>
            <span>{randomText}</span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="container text-center">
          <div className="row">{images}</div>
        </div>
      </div>
    );
  }
}

export default LastestPics;
