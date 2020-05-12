import React, { Component } from "react";
import faker from "faker";

let count = 15;
class Photos extends Component {
  render() {
    let images = [];
    for (let i = 0; i < count; i++) {
      let randomImages = faker.image.avatar();
      images.push(
        <div className="col-sm ml-2">
          <div
            className="card border-primary mb-4"
            style={{ width: "300px", height: "300px" }}
          >
            <img
              className="m-auto"
              style={{ width: "280px", height: "280px" }}
              src={randomImages}
              alt="random images"
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="container mt-5 mx-auto">
          <div className="row">{images}</div>
        </div>
      </div>
    );
  }
}

export default Photos;
