import React from "react";
import data from "../data/project.json";

function projects() {
  let items = [];

  //need to add collapsable component here
  data.projects.forEach((project) =>
    items.push(
      <>
        <div>
          <h2>{project.title}</h2>
          <h2>{project.smallDescription}</h2>
          <h2>{project.link}</h2>
          <h2>{project.githubLink}</h2>
        </div>
        <br/>
      </>
    )
  );

  return <div>{items}</div>;
}

export default projects;
