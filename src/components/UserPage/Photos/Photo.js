import React, { Component } from "react";

class Photo extends Component {
  render() {
    return (
      <div className="col-sm">
        <div className="card border-none photos-div">
          <img
            className="m-auto photos-img"
            src={this.props.avatar}
            alt="random images"
          />
        </div>
      </div>
    );
  }
}

export default Photo;
