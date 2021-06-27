import React from "react";

function ProjectItems(props) {
  return (
    <figure class="portfolio-item">
    <img src="assets/images/quiz-game-screenshot.png"
        alt="a dark-themed javascript quiz built with javascript">
    <figcaption>
        <h2 class="portfolio-title">Javascript - The Ultimate Champion</h2>
        <p class="portfolio-desc">This application tests a users knowledge of web development as they
            race against the clock to get their name on the leader-board.</a>
        </p>
        <a href="https://github.com/jayyousef/javascript_quiz_ultimate_champion"
            class="portfolio-link">Deployed Link
            </a>
    </figcaption>
</figure>
  );
}

export default ProjectItems;
