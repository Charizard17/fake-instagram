import React, { Component } from "react";
import faker from "faker";
import "./Photos.css";

let count = 15;
class Photos extends Component {
  render() {
    let images = [];
    for (let i = 0; i < count; i++) {
      let randomImages = faker.image.avatar();
      let uuid = faker.random.uuid();
      images.push(
        <div className="col-sm" key={uuid}>
          <div
            className="card border-none photos-div"
          >
            <img
              className="m-auto photos-img"
              src={randomImages}
              alt="random images"
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="container">
          <div className="row">{images}</div>
        </div>
      </div>
    );
  }
}

export default Photos;
