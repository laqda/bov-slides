import React from "react";
import styles from "./Payload.css";
import {Slide} from "../../Slide/Slide";
import ghidra from "./ghidra.png";

export const payloadTitles = {
  title: "Payload",
  subtitles: [
    {
      title: "Vue globale",
      length: 1,
    },
    {
      title: "Analyse Ghidra",
      length: 1,
    },
  ],
};

export const Payload = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
        <h2>TEST</h2>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img className={styles.ghidra} alt="ghidra" src={ghidra}/>
      </Slide>
    </React.Fragment>
  );
};
