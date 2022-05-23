import React from "react";
import Image from "next/image";
import data from "../data/experience.json";

import Emmes from "../images/icons/emmes.png";
import Pupil from "../images/icons/pupil.png";
import Hack4Impact from "../images/icons/hack4impact.png";

function experience() {
  let items = [];
  let images = {
    Emmes: { img: Emmes, width: "304px", height: "123px" },
    Pupil: { img: Pupil, width: "179px", height: "179px" },
    Hack4Impact: { img: Hack4Impact, width: "128px", height: "156px" },
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
        <div>
          <Image
            src={images[experience.work].img}
            alt={experience.work}
            width={images[experience.work].width}
            height={images[experience.work].height}
            layout="fixed"
          />
        </div>
        <div className="experience-divs">
          <h2>{experience.work}</h2>
          <h2>{experience.duration}</h2>
          <h2>{experience.title}</h2>
          {descriptionItems}
        </div>
        <br />
      </>
    );
  });

  return <div>{items}</div>;
}

export default experience;
