import React, { useState } from "react";

import generateRandomArray from "../../utils/randomize";
import { algorithms } from "../../utils/constants";
import "./menuStyles.scss";

const MenuApp = ({ size, setRandomArray }) => {
  let [currentAlgorithm, setCurrentAlgorithm] = useState("");

  const algorithChangeHandler = (event) => {
    currentAlgorithm = event.target.outerText;
  };

  const generateRandomBtnHandler = () => {
    setRandomArray(generateRandomArray(size));
  };

  return (
    <section className="menu">
      <button onClick={generateRandomBtnHandler} className="menu-button text">
        Generate New Array
      </button>
      <div className="range">
        <label className="text" htmlFor="array-size">
          Change array size
        </label>
        <input className="menu-range" type="range" min="4" max="30" />
        <span className="text"></span>
      </div>
      <div>
        {algorithms.map((algorithm, index) => {
          return (
            <button
              onClick={algorithChangeHandler}
              className="menu-button text"
            >
              {algorithm}
            </button>
          );
        })}
      </div>

      <button className="menu-button text menu-toggle">Sort!</button>
    </section>
  );
};

export default MenuApp;
