import React, { Component } from "react";

class FooterInfoLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerChoices: [
        "About",
        "Help",
        "Press",
        "API",
        "Jobs",
        "Privacy",
        "Impressum/Terms/NetzDG",
        "Locations",
        "Top Accounts",
        "Hashtags",
        "Language",
      ],
    };
  }
  render() {
    return (
      <ul className="list-inline">
        <li className="list-inline-item">
          {this.state.footerChoices.map((element, i) => {
            return (
              <a key={i} className="mr-3" href={`/${element}`}>
                <small>{element} </small>
              </a>
            );
          })}
        </li>
      </ul>
    );
  }
}

export default FooterInfoLinks;
