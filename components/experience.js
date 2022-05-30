import React, {useState, useEffect} from "react";
import Image from "next/image";
import data from "../data/experience.json";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Emmes from "../images/icons/emmes.png";
import Pupil from "../images/icons/pupil.png";
import Hack4Impact from "../images/icons/hack4impact.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Experience() {
  const size = useWindowSize();
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
            posDescriptionItems.push(<li className="experience-desc">{i}</li>)
          );
          descriptionItems.push(
            <div>
              <h2 className="experience-subpos">{item.title}</h2>
              <h2 className="experience-subdur">{item.duration}</h2>
              {posDescriptionItems}
              <br />
            </div>
          );
        })
      : experience.description.forEach((item) =>
          descriptionItems.push(<li className="experience-desc">{item}</li>)
        );

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
            <div className="float-container-experience">
              <div className="float-child experience-image">
                <Image
                  src={images[experience.work].img}
                  alt={experience.work}
                  width={images[experience.work].width}
                  height={images[experience.work].height}
                  layout="fixed"
                />
              </div>
              <div className="float-child">
                <h2 className="title">
                  {experience.work} - {experience.title}
                </h2>
                <h2 className="experience-duration">{experience.duration}</h2>
              </div>
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
