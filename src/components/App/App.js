import React, {useState, useEffect} from "react";
import styles from './App.css';
import {Title} from "../slides/Title/Title";
import {Footer} from "../Footer/Footer";
import {Header} from "../Header/Header";
import Reveal from "reveal.js";
import {Server, serverTitles} from "../slides/Server/Server";
import {End} from "../slides/End/End";

const hideBarsOnSlides = [0, 17]; // TODO

export const App = () => {
  const slideIndex = useSlideIndex();
  return (
    <div className={styles.App}>
      <div className="reveal">
        <Header slideIndex={slideIndex} hideOnSlides={hideBarsOnSlides} titles={[
          serverTitles,
        ]}/>
        <div className="slides">
          <Title/>
          <Server/>
          <End/>
        </div>
        <Footer slideIndex={slideIndex} hideOnSlides={hideBarsOnSlides}/>
      </div>
    </div>
  );
};

const useSlideIndex = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    setSlideIndex(Reveal.getIndices().h);
    Reveal.addEventListener('slidechanged', () => {
      setSlideIndex(Reveal.getIndices().h);
    });
  }, []);
  return slideIndex;
};