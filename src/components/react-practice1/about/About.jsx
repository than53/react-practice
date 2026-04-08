import React from "react";

const About = () => {
  const name = "Jonathan Garingan";
  const profession = "Fullstack Developer";
  return (
    <section id="about" className="about-section">
      <h2>About me</h2>
      <p>
        Hello! I am {name}, a passionante {profession}, I love building web
        application that solves real world user problem
      </p>
    </section>
  );
};

export default About;
