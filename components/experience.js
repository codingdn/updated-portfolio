import React from "react";
import Image from "next/image";
import data from "../data/experience.json";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Emmes from "../images/icons/emmes.png";
import Pupil from "../images/icons/pupil.png";
import Hack4Impact from "../images/icons/hack4impact.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function experience() {
  let items = [];
  let images = {
    Emmes: { img: Emmes, width: "304px", height: "123px" },
    Pupil: { img: Pupil, width: "100px", height: "123px" },
    Hack4Impact: { img: Hack4Impact, width: "123px", height: "123px" },
  };

  //need to add collapsable component here
  data.experiences.forEach((experience) => {
    let descriptionItems = [];
    experience.multiplePositions
      ? experience.positions.forEach((item) => {
          let posDescriptionItems = [];
          item.description.forEach((i) =>
            posDescriptionItems.push(<li>{i}</li>)
          );
          descriptionItems.push(
            <div>
              <h2>{item.title}</h2>
              <h2>{item.duration}</h2>
              {posDescriptionItems}
            </div>
          );
        })
      : experience.description.forEach((item) =>
          descriptionItems.push(<li>{item}</li>)
        );

    items.push(
      <>
        <Accordion className="experience-divs">
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
            <div>
              <Image
                src={images[experience.work].img}
                alt={experience.work}
                width={images[experience.work].width}
                height={images[experience.work].height}
                layout="fixed"
              />
            </div>
            <div>
              <h2 className="title">
                {experience.work} - {experience.title}
              </h2>
              <h2 className="experience-duration">{experience.duration}</h2>
            </div>
          </AccordionSummary>
          <AccordionDetails>{descriptionItems}</AccordionDetails>
        </Accordion>
        <br />
      </>
    );
  });

  return <div>{items}</div>;
}

export default experience;
