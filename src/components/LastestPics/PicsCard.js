import React, { Component } from "react";

class PicsCard extends Component {
  render() {
    return (
      <div className="col-sm">
        <div className="card border-none latestimgdiv">
          <img
            className="rounded-circle m-auto latestimg"
            src={this.props.avatar}
            alt="random images"
          ></img>
          <span>{this.props.word}</span>
        </div>
      </div>
    );
  }
}

export default PicsCard;
