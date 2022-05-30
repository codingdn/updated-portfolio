import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import FolderIcon from "@mui/icons-material/Folder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import data from "../data/project.json";
import useWindowSize from "../helper/useWindowSize";

export default function Projects() {
  const size = useWindowSize();
  let items = [];

  data.projects.forEach((project) =>
    items.push(
      <>
        <Accordion
          sx={{
            backgroundColor: "#2d3a55",
            fontFamily: "Source Code Pro, monospace",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              size.width > 600 ? (
                <AddCircleOutlineIcon
                  sx={{ fontSize: 40 }}
                  className="iconColors"
                />
              ) : (
                ""
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {size.width > 600 ? (
              <FolderIcon sx={{ fontSize: 60 }} className="iconColors" />
            ) : null}
            <div>
              <h2 className="title">{project.title}</h2>
              <h3 className="experience-desc">{project.smallDescription}</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ fontSize: 50 }} className="project-icons" />
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <LinkIcon sx={{ fontSize: 50 }} className="project-icons" />
              </a>
            </div>
          </AccordionDetails>
        </Accordion>
        <br />
      </>
    )
  );

  return <div>{items}</div>;
}
