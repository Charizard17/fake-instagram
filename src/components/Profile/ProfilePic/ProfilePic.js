import React, { Component } from "react";
import faker from "faker";
import "./ProfilePic.css";

let randomPic = faker.image.avatar();
class ProfilePic extends Component {
  render() {
    return (
      <div className="d-inline-flex profilepic-center">
        <div
          className="card border-primary border-4 mb-5 rounded-circle profilepicdiv"
        >
          <img
            className="rounded-circle m-auto profilepicimg"
            src={randomPic}
            alt="profile picture"
          />
        </div>
      </div>
    );
  }
}
export default ProfilePic;
