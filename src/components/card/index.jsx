import React from "react";
import { CardComponent, CardGrid, ImgContainer, TextContainer } from "./styles";

const Card = ({ results, dropdown }) => {
  let displayResults;

  if (results) {
    displayResults = results.map((character_items) => {
      const {
        id,
        name,
        image,
        species,
        gender,
        status,
        origin,
        location,
        episode,
      } = character_items;

      const imageAltAttribute = `A beautiful pic of ${name}`;

      const firstName = name.split(" ");

      var firstSeenOn = episode[0];
      firstSeenOn = firstSeenOn.toString().replace(/[\D]/g, "");
      var lastSeenOn = episode.at(-1);
      lastSeenOn = lastSeenOn.toString().replace(/[\D]/g, "");

      const getStatusBackgroundColor = () => {
        let bgColor;
        const green = "#DAF0BE";
        const red = "#C81D25";
        const grey = "#264653";
        if (status === "Alive") {
          bgColor = green;
        } else if (status === "Dead") {
          bgColor = red;
        } else if (status === "unknown") {
          bgColor = grey;
        }
        return bgColor;
      };

      const getStatusTextColor = () => {
        let textColor;
        const darkGreen = "#446418";
        const white = "#ffffff";
        if (status === "Alive") {
          textColor = darkGreen;
        } else {
          textColor = white;
        }
        return textColor;
      };

      return (
        <CardComponent key={id}>
          <ImgContainer>
            <img
              src={image}
              alt={imageAltAttribute}
            />
          </ImgContainer>
          <TextContainer>
            <div className="name">
              <h1>{name}</h1>
            </div>
            <div className="species-gender">
              <p className="species-gender">
                {species} - {gender}
              </p>
            </div>
            <div
              className="status"
              style={{
                width: "fit-content",
                backgroundColor: getStatusBackgroundColor(),
                color: getStatusTextColor(),
              }}
            >
              <p className="status">{status}</p>
            </div>
            <div className="description">
              <p className="description">
                <strong>{firstName[0]}</strong> origin is{" "}
                <strong>{origin.name}</strong> and his last known location was{" "}
                <strong>{location.name}</strong>.{" "}
                {gender === "Male" ? "He" : "She"} was first seen in episode{" "}
                <strong>{firstSeenOn}</strong> and last seen in episode{" "}
                <strong>{lastSeenOn}</strong>.
              </p>
            </div>
          </TextContainer>
        </CardComponent>
      );
    });
  } else {
    setTimeout(function () {
      displayResults = "Nessun risultato :(";
    }, 2000);
  }

  return (
    <CardGrid className={!dropdown ? "visible" : "blur"}>
      {displayResults}
    </CardGrid>
  );
};

export default Card;
