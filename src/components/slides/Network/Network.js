import React from "react";
import styles from "./Network.css";
import {Slide} from "../../Slide/Slide";

export const networkTitles = {
  title: "Analyse réseau",
  subtitles: [
    {
      title: "Trace réseau",
      length: 1,
    },
    {
      title: "Procédure d'attaque",
      length: 1,
    },
  ],
};

export const Network = () => {
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
