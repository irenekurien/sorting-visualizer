import React, { useState } from "react";
import { algorithms, generateRandomArray } from "../../utils";
import { quickSort, mergeSort, bubbleSort, insertionSort, selectionSort } from "../../algorithms";
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

  let [sortingSpeed, setSortingSpeed] = useState(1000);
  let [isSorting, setIsSorting] = useState(false);

  const updateState = (newRandomArray) => {
    setIsSorting(false);
    setSize(newRandomArray.length);
    setRandomArray(newRandomArray);
    setMaxEl(Math.max(...newRandomArray));
    setColorsArray(new Array(newRandomArray.length).fill(0));
  };

  const algorithmAndSortHandler = async (event) => {
    currentAlgorithm = event.target.textContent;
    event.target.className = "menu-button text toggle";
    setIsSorting(true);

    const props = {
      array: randomArray,
      setArray: setRandomArray,
      setColorsArray: setColorsArray,
      sortingSpeed: sortingSpeed,
    };
    console.log(algorithms)

    switch (currentAlgorithm) {
      case algorithms[0]:
        await quickSort(props);
        break;
      case algorithms[1]:
        await mergeSort(props);
        break;
      case algorithms[2]:
        await insertionSort(props);
        break;
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
    setIsSorting(false);
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
    setSortingSpeed(250 - event.target.value);
  };

  return (
    <section className="menu">
      <button
        onClick={generateRandomBtnHandler}
        className="menu-button text"
        disabled={isSorting}
      >
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
          disabled={isSorting}
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
          disabled={isSorting}
        />
      </div>
      <div>
        {algorithms.map((algorithm, index) => {
          return (
            <button
              key={index}
              onClick={algorithmAndSortHandler}
              className="menu-button text"
              disabled={isSorting}
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
