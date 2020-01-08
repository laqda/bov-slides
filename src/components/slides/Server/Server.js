import React from "react";
import styles from "./Server.css";
import {Slide} from "../../Slide/Slide";

export const serverTitles = {
  title: "Fonctionnement serveur",
  subtitles: [
    {
      title: "Vue graphique",
      length: 2,
    },
  ],
};

export const Server = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
        <h2>TEST</h2>
      </Slide>
    </React.Fragment>
  );
};
