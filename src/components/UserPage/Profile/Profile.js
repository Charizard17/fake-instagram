import React, { Component } from "react";
import ProfilePic from "./ProfilePic/ProfilePic";
import ProfileInfos from "./ProfileInfos/ProfileInfos";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "80px" }}>
          <div className="row">
            <div className="col-sm-4">
              <ProfilePic />
            </div>
            <div className="col-sm-8">
              <ProfileInfos />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
