import React from "react";
import jensHensImg from ".././assets/jens-hens.png";
import techBlogImg from ".././assets/tech-blog-screenshot.png";
import investImg from ".././assets/investment-wizard-demo.gif";
import weatherImg from ".././assets/weatherApp.png";
import quizImg from ".././assets/quiz-game-screenshot.png";

function Projects() {
  const projectInfo = [
    {
      image: jensHensImg,
      alt: `"Jenns Hens is a small ecomm site built for egg distributors."`,
      title: `Jenn's Hens`,
      desc: `A small ecomm site built around fulfilling and distributing orders for small artisanal egg boutiques who needed a more robust way to track orders, inventory, and fulfillment process.`,
      link: `https://secure-ravine-09245.herokuapp.com/`,
      github: `https://github.com/jayyousef/jens-hens-project`,
    },

    {
      image: techBlogImg,
      alt: `"a tech blog for those interested in connecting with technology"`,
      title: `Tech-Blog CMS - MVC`,
      desc: `This site allows like-minded users to create accounts, create posts, comment on others posts, edit thier posts and logout. It uses cookies and sessions to verify and identify users with an automatic session timeout.`,
      link: `https://whispering-tundra-70670.herokuapp.com/`,
      github: `https://github.com/jayyousef/tech-blog-wordpressStyleMVC/`,
    },

    {
      image: investImg,
      alt: `"A web page for the Investment Wizard that shows stock data, a graph and news articles"`,
      title: `Investment Dashboard`,
      desc: `This application allows novice investors to see a quick run down of the most important information to make an informed decision on investing their money in a
      certain stock.`,
      link: `https://matthewxgoad.github.io/investment-wizard/`,
      github: `https://github.com/jayyousef/investment-wizard`,
    },

    {
      image: weatherImg,
      alt: `"A web page for the Weather Dashboard that shows the current weather and a five day forecast"`,
      title: `Weather Dashboard`,
      desc: `A weather application that allows you to search cities and see the current weather along with the five day forecast.`,
      link: `https://jayyousef.github.io/Weather-Application/`,
      github: `https://github.com/jayyousef/Weather-Application`,
    },

    {
      image: quizImg,
      alt: `Jenns Hens is a small ecomm site built for egg distributors.`,
      title: `Javascript - The Ultimate Champion`,
      desc: `This application tests a users knowledge of web development as they race against the clock to get their name on the leader-board.`,
      link: `https://jayyousef.github.io/javascript_quiz_ultimate_champion/`,
      github: `https://github.com/jayyousef/javascript_quiz_ultimate_champion`,
    },
  ];

  const mappedItems = projectInfo.map((item) => {
    return (
      <div key={item.title} className="card">
        <div className="card-header">
          <h3 className="card-header-title is-centered">{item.title}</h3>
          <a className="card-header-title is-centered" href={item.link}>
            Link to deployed site
          </a>
        </div>
        <figure className="portfolio-item featured">
          <img src={item.image} alt={item.alt}></img>
          <figcaption>
            <h2 className="portfolio-title">{item.title}</h2>
            <p className="portfolio-desc">{item.desc}</p>
            <a href={item.github} className="portfolio-link">
              More info
            </a>
          </figcaption>
        </figure>
      </div>
    );
  });

  return (
    <section className="portfolio">
      <div className="container">
        <h1>Recent Projects</h1>

        <div>{mappedItems}</div>
      </div>
    </section>
  );
}

export default Projects;
