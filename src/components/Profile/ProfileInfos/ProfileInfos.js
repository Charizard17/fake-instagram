import React, { Component } from "react";
import faker from "faker";

let randomName = faker.name.findName();
let postNumber = faker.random.number();
let followerNumber = faker.random.number();
let followingNumber = faker.random.number();
let randomText = faker.lorem.paragraph();
let randomNumber = Math.floor(Math.random()*60);
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
                <span className="badge badge-primary ml-2 rounded-circle">✓</span>
                <span className="badge badge-primary ml-4" style={{cursor: "pointer"}} >Follow</span>
              </h5>
              <span className="">
                <strong>{postNumber}</strong> posts
              </span>
              <span className="ml-3">
                <strong>{followerNumber}</strong> followers
              </span>
              <span className="ml-3">
                <strong>{followingNumber}</strong> following
              </span>
              <p className="card-text mt-3">
                {randomText}
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated {randomNumber} mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfos;
