import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/girl.png" alt="man.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There I'm </h2>
          <h1>Lara Olivia</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="portfolio">
          <img src="assets/down.png" alt="down.png" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
