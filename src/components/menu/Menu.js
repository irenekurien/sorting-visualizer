import React, { useState } from "react";

import { selectionSort } from "../../algorithms/selectionSort";
import { bubbleSort } from "../../algorithms/bubbleSort";
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
  let currentAlgorithm = algorithms[4];

  let [visualizationSpeed, setVisualizationSpeed] = useState(1000);

  const updateState = (newRandomArray) => {
    setSize(newRandomArray.length);
    setRandomArray(newRandomArray);
    setMaxEl(Math.max(...newRandomArray));
    setColorsArray(new Array(newRandomArray.length).fill(0));
  };

  const algorithmAndSortHandler = async (event) => {
    currentAlgorithm = event.target.outerText;
    event.target.className = "menu-button text toggle";

    const props = {
      array: randomArray,
      setArray: setRandomArray,
      setColorsArray: setColorsArray,
      visualizationSpeed: visualizationSpeed,
    };

    switch (currentAlgorithm) {
      case algorithms[3]:
        await selectionSort(props);
        break;
      case algorithms[4]:
        await bubbleSort(props);
        break;
      default:
        break;
    }

    event.target.className = "menu-button text";
    const newColorsArray = new Array(size).fill(3);
    setColorsArray(newColorsArray);
  };

  const generateRandomBtnHandler = () => {
    const newRandomArray = generateRandomArray(size);
    updateState(newRandomArray);
  };

  const changeArraySizeHandler = (event) => {
    const newRandomArray = generateRandomArray(event.target.value);
    updateState(newRandomArray);
  };

  const changeSpeedHandler = (event) => {
    setVisualizationSpeed(250 - event.target.value);
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
          max="250"
          defaultValue={size}
        />
      </div>
      <div className="range">
        <label className="text" htmlFor="array-size">
          Change speed
        </label>
        <input
          onChange={changeSpeedHandler}
          className="menu-range"
          type="range"
          min="8"
          max="250"
          defaultValue={size}
        />
      </div>
      <div>
        {algorithms.map((algorithm, index) => {
          return (
            <button
              key={index}
              onClick={algorithmAndSortHandler}
              className="menu-button text"
            >
              {algorithm}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MenuApp;
