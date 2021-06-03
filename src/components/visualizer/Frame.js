import React, { useState } from "react";
import Menu from "../menu/Menu";
import generateRandomArray from "../../utils/randomize";
import Bar from "./Bars";

const Home = () => {
  let [size, setSize] = useState(8);
  let [randomArray, setRandomArray] = useState(generateRandomArray(size));
  let [colorsArray, setColorsArray] = useState(new Array(size).fill(0));
  let [maxEl, setMaxEl] = useState(Math.max(...randomArray));

  return (
    <div>
      <Menu
        setSize={setSize}
        randomArray={randomArray}
        setRandomArray={setRandomArray}
        setColorsArray={setColorsArray}
        setMaxEl={setMaxEl}
      />
      <div
        style={{
          display: "flex",
          height: "80vh",
          width: "80vw",
          margin: "0 auto",
          flexDirection: "row",
          alignItems: "end",
        }}
      >
        {randomArray.map((item, index) => {
          const height = (item / maxEl) * 100;
          return (
            <div
              key={index}
              style={{ height: "100%", display: "flex", alignItems: "end" }}
            >
              <Bar code={colorsArray[index]} height={height} width={size} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
