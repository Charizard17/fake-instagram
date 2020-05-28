import React, { Component } from "react";
import FooterInfoLinks from "./FooterInfoLinks";

class Footer extends Component {
  render() {
    return (
      <div>
        <FooterInfoLinks />
        <footer className="blockquote-footer">
          &copy; 2020 Fake Instagram from Fakebook
        </footer>
      </div>
    );
  }
}

export default Footer;
