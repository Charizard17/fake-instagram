import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Photos from "./Photos/Photos";
import LastestPics from "./LastestPics/LastestPics";

class UserPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile className="mt-2" />
        <LastestPics />
        <div className="container">
          <hr />
        </div>
        <Photos />
      </div>
    );
  }
}

export default UserPage;
