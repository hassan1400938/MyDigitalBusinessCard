import React from "react";

import fbIcon from "../images/facebook-icon.svg";
import ghIcon from "../images/github-icon.svg";
import igIcon from "../images/instagram-icon.svg";
import twIcon from "../images/twitter-icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="socialIcons">
        <a href="https://web.facebook.com/mohammadwaqarulhassan1800">
          <img src={fbIcon}></img>
        </a>
        <a href="https://github.com/hassan1400938/">
          <img src={ghIcon}></img>
        </a>
        <a href="https://www.instagram.com/rixo_sol/">
          <img src={igIcon}></img>
        </a>
        <a href="https://twitter.com/MuhammadW119">
          <img src={twIcon}></img>
        </a>
      </div>
    </footer>
  );
}
