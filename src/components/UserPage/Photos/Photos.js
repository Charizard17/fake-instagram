import React, { Component } from "react";
import faker from "faker";
import "./Photos.css";
import Photo from "./Photo";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPhotos: [],
    };
  }

  componentDidMount() {
    let initialPhotos = this.getDataFromFaker();
    this.setState({ initialPhotos });
    console.log(initialPhotos);
  }

  getDataFromFaker() {
    let randomData = [];
    for (let i = 0; i < 15; i++) {
      randomData.push({
        uuid: faker.random.uuid(),
        avatar: faker.internet.avatar(),
      });
    }
    return randomData;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.initialPhotos.map((element) => {
              return <Photo key={element.uuid} avatar={element.avatar} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Photos;
