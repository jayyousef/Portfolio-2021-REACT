import React from "react";
import githubImg from ".././assets/github.png"
import linkedInImg from ".././assets/linkedin.png"
import instaImg from ".././assets/instagram.png"
import Resume from ".././assets/Resume.pdf"

function Footer() {
  return (
  <div>
    <p>Follow me on social media</p>
      <div className="social-icons">
          <a href="https://github.com/jayyousef">
              <img alt="Github" src={githubImg} className="social-icon"></img>
          </a>
          <a href="https://www.linkedin.com/in/jay-yousef-4294aa41/">
              <img alt="Linkedin" src={linkedInImg} className="social-icon"></img>
          </a>
          <a href="https://www.instagram.com/saintlouisvideos/">
              <img alt="Instagram" src={instaImg} className="social-icon"></img>
          </a>

      </div>

      <a href={Resume} className="resume">My Resume</a>
      <br></br>
      <p>Phone Number: 3149103461</p>
      <p>Email: jay.yousef@gmail.com</p>
      <br></br><br></br>

      <p className="copyright">Copyright 2021 <a style="color: white;" href="https://github.com/jayyousef">Jay Yousef</a>
      </p>
</div>
  );
}

export default Footer;
