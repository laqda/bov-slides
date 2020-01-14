import React from "react";
import styles from "./Demo.css";
import {Slide} from "../../Slide/Slide";

export const demoTitles = {
  title: "Démonstration",
  subtitles: [
    {
      title: "",
      length: 1,
    },
  ],
};

export const Demo = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#555555">
        {/*<h2>TEST</h2>*/}
        {/*- adresse -4 car (ECHO ) --- -5 mais le premier nop est mis à \0*/}
      </Slide>
    </React.Fragment>
  );
};
