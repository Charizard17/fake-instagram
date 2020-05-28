import React, { Component } from "react";
import faker from "faker";
import "./LastestPics.css";
import PicsCard from "./PicsCard";

class LastestPics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: [],
    };
  }

  componentDidMount() {
    let initialData = this.getDataFromFaker();
    this.setState({ initialData });
    console.log(initialData);
  }

  getDataFromFaker() {
    let randomData = [];
    for (let i = 0; i < 3; i++) {
      randomData.push({
        uuid: faker.random.uuid(),
        avatar: faker.internet.avatar(),
        word: faker.lorem.word(),
      });
    }
    return randomData;
  }

  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
          {this.state.initialData.map((element) => {
          return (
            <PicsCard
              key={element.uuid}
              avatar={element.avatar}
              word={element.word}
            />
          );
        })}
          </div>
        </div>
      </div>
    );
  }
}

export default LastestPics;
