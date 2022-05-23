import React from "react";
import data from "../data/experience.json";

function experience() {
  let items = [];

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
