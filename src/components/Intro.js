import React from "react";
import egpyt from ".././assets/yousef-in-egypt.jpg"
import graduation from ".././assets/yousef graduation.jpg"



function Intro() {
  return (
    <section className="intro">
        <div className="intro-left">
            <img src={egpyt} alt="Jay posing in egypt"></img>
        </div>
        <div className="intro-middle">
            <h3>Creation as Connection and Exploration</h3>

            <div className="divider"></div>

            <p>"You can't use up creativity. The more you use, the more you have."<br></br>
                On a never-ending journey together to create something meaningful and beautiful.
            </p>
        </div>
        <div className="intro-right">
            <img src={graduation} alt="Graduation with my masters degree in 2016"></img>
        </div>
    </section>
  );
}

export default Intro;
