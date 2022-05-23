import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import data from "../data/project.json";

function projects() {
  let items = [];

  data.projects.forEach((project) =>
    items.push(
      <>
        <div className="project-divs">
          <Accordion className="project-divs">
            <AccordionSummary
              expandIcon={
                <AddCircleOutlineIcon
                  sx={{ fontSize: 40 }}
                  className="iconColors"
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <FolderIcon sx={{ fontSize: 60 }} className="iconColors" />
              <div>
                <h2 className="title">{project.title}</h2>
                <h3>{project.smallDescription}</h3>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{project.link}</Typography>
              <Typography>{project.githubLink}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <br />
      </>
    )
  );

  return <div>{items}</div>;
}

export default projects;
