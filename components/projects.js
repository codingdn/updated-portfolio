import React from "react";
import Accordion from "@mui/material/Accordion";
import FolderIcon from "@mui/icons-material/Folder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import data from "../data/project.json";

function projects() {
  let items = [];

  //need to add collapsable component here
  data.projects.forEach((project) =>
    items.push(
      <>
        <div className="project-divs">
          <div>
            <FolderIcon sx={{ fontSize: 85 }}/>
            <div>
              <h2>{project.title}</h2>
              <h2>{project.smallDescription}</h2>
            </div>
            <AddCircleOutlineIcon sx={{ fontSize: 60 }}/>
          </div>
          <h2>{project.link}</h2>
          <h2>{project.githubLink}</h2>
        </div>
        <br />
      </>
    )
  );

  return <div>{items}</div>;
}

export default projects;
