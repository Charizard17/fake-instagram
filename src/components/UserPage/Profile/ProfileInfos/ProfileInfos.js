import React, { Component } from "react";
import faker from "faker";

let randomName = faker.name.findName();
let postNumber = faker.random.number();
let followerNumber = faker.random.number();
let followingNumber = faker.random.number();
let randomText = faker.lorem.paragraph();
let randomNumber = Math.floor(Math.random() * 60);

function handleClick(e) {
  e.preventDefault();
  let qwe = document.getElementById("followBadge").innerHTML;
  if (qwe === "Follow") {
    document.getElementById("followBadge").innerHTML = "Followed";
  } else if (qwe === "Followed") {
    document.getElementById("followBadge").innerHTML = "Follow";
  }
}
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
                <span className="badge badge-primary ml-2 rounded-circle">
                  ✓
                </span>
                <button
                  id="followBadge"
                  className="badge badge-primary ml-4"
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  Follow
                </button>
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
              <p className="card-text mt-3">{randomText}</p>
              <p className="card-text">
                <small className="text-muted">
                  Last updated {randomNumber} mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfos;
