import React from "react";
import src from ".././assets/Jay Yousef 2020 Reel _ Editor · Motion Graphics · Colorist.mp4"

function Hero() {
  return (
    <div id="hero">
      <div className="texture"></div>

      <video loop muted autoPlay preload="auto">
        <source
          src={src}
          type="video/mp4"
        ></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Hero;
