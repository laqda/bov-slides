import React from "react";
import styles from "./Recommendations.css";
import {Slide} from "../../Slide/Slide";

export const recommendationsTitles = {
  title: "Recommendations",
  subtitles: [
    {
      title: "ECHO %x%x%x%x %x",
      length: 1,
    },
    {
      title: "Gestions des buffers",
      length: 1,
    },
    {
      title: "Bit NX",
      length: 1,
    },
  ],
};

export const Recommendations = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
      </Slide>
      <Slide data-background-color="#f6f8fa">
      </Slide>
      <Slide data-background-color="#f6f8fa">
      </Slide>
    </React.Fragment>
  );
};
