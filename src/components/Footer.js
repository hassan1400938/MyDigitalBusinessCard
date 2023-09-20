import React from "react";

import fbIcon from "../images/facebook-icon.svg";
import ghIcon from "../images/github-icon.svg";
import igIcon from "../images/instagram-icon.svg";
import twIcon from "../images/twitter-icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="socialIcons">
        <a href="#">
          <img src={fbIcon}></img>
        </a>
        <a href="#">
          <img src={ghIcon}></img>
        </a>
        <a href="#">
          <img src={igIcon}></img>
        </a>
        <a href="#">
          <img src={twIcon}></img>
        </a>
      </div>
    </footer>
  );
}
