import React, { useState } from "react";

import generateRandomArray from "../../utils/randomize";
import { algorithms } from "../../utils/constants";
import "./menuStyles.scss";

const MenuApp = ({
  setSize,
  randomArray,
  setRandomArray,
  setColorsArray,
  setMaxEl,
}) => {
  let size = randomArray.length;
  let [currentAlgorithm, setCurrentAlgorithm] = useState("");

  const algorithChangeHandler = (event) => {
    currentAlgorithm = event.target.outerText;
  };

  const generateRandomBtnHandler = () => {
    const newRandomArray = generateRandomArray(size);
    setRandomArray(newRandomArray);
    setMaxEl(Math.max(...newRandomArray));
  };

  const changeArraySizeHandler = (event) => {
    const newRandomArray = generateRandomArray(event.target.value);
    setSize(newRandomArray.length);
    setRandomArray(newRandomArray);
    setMaxEl(Math.max(...newRandomArray));
    setColorsArray(new Array(newRandomArray.length).fill(0));
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
        <input
          onChange={changeArraySizeHandler}
          className="menu-range"
          type="range"
          min="8"
          max="200"
          defaultValue={size}
        />
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
