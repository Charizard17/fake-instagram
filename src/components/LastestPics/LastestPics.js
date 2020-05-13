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
        <div className="col" key={uuid}>
          <div
            className="card border-white mb-3"
            style={{ width: "150px", height: "100px" }}
          >
            <img
              className="rounded-circle mx-auto"
              style={{ width: "75px", height: "75px", cursor: "pointer" }}
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
          <div className="row">
            {images}
          </div>
        </div>
      </div>
    );
  }
}

export default LastestPics;
