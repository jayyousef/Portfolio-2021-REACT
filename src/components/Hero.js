import React from "react";
import src from ".././assets/Jay Yousef 2020 Reel _ Editor · Motion Graphics · Colorist.mp4";

function Hero() {
  return (
    <>
      <div id="hero">
        <div className="texture"></div>

        <video loop muted autoPlay preload="auto">
          <source src={src} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>

        <div class="caption">
        <h1>Jay Yousef Portfolio</h1>
        <h2 style={{color:'white'}}>Scroll Down to See Recent Projects</h2>
      </div>
      </div>


    </>
  );
}

export default Hero;
