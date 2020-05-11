import React, { Component } from "react";
import faker from "faker";

let randomName = faker.name.findName();
class ProfileInfos extends Component {
  render() {
    return (
      <div>
        <div
          className="card border-white col-md-8 mb-3"
          style={{ maxWidth: "700px" }}
        >
          <div className="row no-gutters">
            <div className="card-body">
              <h5 className="card-title" id="cardTitle">
                {randomName}
                <span className="badge badge-primary rounded-circle">✓</span>
                <span className="badge badge-primary">Follow</span>
              </h5>
              <span className="">
                <strong>7463</strong> posts
              </span>
              <span className="ml-3">
                <strong>514k</strong> followers
              </span>
              <span className="ml-3">
                <strong>2134</strong> following
              </span>
              <p className="card-text mt-3">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfos;
