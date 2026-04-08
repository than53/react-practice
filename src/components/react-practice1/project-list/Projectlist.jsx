import React from "react";

const Projectlist = () => {
  const name = "Jonathan Garingan";
  const profession = "Fullstack Developer";
  const projects = [
    {
      title: "Card Delivery Tracking System",
      description: "A Batch applcation for saving and updating card details",
      link: "#",
    },
    {
      title: "Card Delivery Tracking System Porta;",
      description: "A web portal for monitoring the batch application",
      link: "#",
    },
    {
      title: "Project Coffee",
      description:
        "A Batch applcation for building Coffee master table in Database and updating data in internal Api",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <a href="#">View</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projectlist;
