import React, { Component } from "react";
import FooterInfoLinks from "./FooterInfoLinks";

class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom" style={{ marginLeft: "30%" }}>
        <FooterInfoLinks />
        <footer className="blockquote-footer">
          &copy; 2020 Fake Instagram from Fakebook
        </footer>
      </div>
    );
  }
}

export default Footer;
