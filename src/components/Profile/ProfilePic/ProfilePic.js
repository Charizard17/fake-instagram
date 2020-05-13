import React, { Component } from "react";
import faker from "faker";
import "./ProfilePic.css";

let randomPic = faker.image.avatar();
class ProfilePic extends Component {
  render() {
    return (
      <div className="d-inline-flex profilepic-center">
        <div
          className="card border-primary border-4 mb-5 rounded-circle"
          style={{ width: "175px", height: "175px" }}
        >
          <img
            className="rounded-circle m-auto profilepic-hover"
            src={randomPic}
            alt="profile picture"
            style={{ width: "160px", height: "160px" }}
          />
        </div>
      </div>
    );
  }
}
export default ProfilePic;
