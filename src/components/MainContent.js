import React from "react";

import Mail from "../images/mail.svg";
import Linkedin from "../images/linkedin.svg";

export default function MainContent() {
  return (
    <main>
      <h1 className="name">Muhammad Waqar</h1>
      <h2 className="position">Frontend Developer</h2>
      <a className="webLink" href="https://rixosol.com">
        rixosol.com
      </a>
      <div className="btns-container">
        <a href="#" className="emailBtn btn">
          <img src={Mail}></img>Email
        </a>
        <a href="#" className="linkedinBtn btn">
          <img src={Linkedin}></img>LinkedIn
        </a>
      </div>

      <h2 className="aboutHeading">About</h2>
      <p className="aboutDes">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>

      <h2 className="interestsHeading">Interests</h2>
      <p className="interestsDes">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </main>
  );
}
