import React from "react";
import park from ".././assets/yousefpark.jpg"



function About() {
  return (
    <section class="about-me">
        <img class="about-img" src={park} alt="Jay and his wife Alex at the park"></img>
        <h1 class="about-title">Jay Yousef</h1>
        <h3 class="about-subtitle">Full Stack Developer</h3>
        <div class="about-text">
            <p>I like solving complex problems with creative solutions; that feeling of breaking through a problem after
                days or
                weeks of struggle; I love helping to create innovative technology through collaboration and teamwork, as
                well as
                story-telling through building an online presence, video production and post-production, photography,
                writing and
                playing music, and (maybe most of all) spending time with my wife and two boys.</p>
            <p> I have a wide range of skills which makes me a versatile team member and a great addition to any team. I
                love to learn new things, and I hate delivering a product that falls short of my high expectations. I
                believe we rise to the expectations that we set for ourselves, and I refuse to lower the bar. Always
                reaching higher. </p>
        </div>
    </section>
  );
}

export default About;
