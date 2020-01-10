import React from "react";
import styles from "./Server.css";
import {Slide} from "../../Slide/Slide";

export const serverTitles = {
  title: "Analyse serveur",
  subtitles: [
    {
      title: "Fonctionnement",
      length: 1,
    },
    {
      title: "Gestion des buffers",
      length: 1,
    },
  ],
};

export const Server = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
        <h2>TEST</h2>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <h2>TEST</h2>
      </Slide>
    </React.Fragment>
  );
};
