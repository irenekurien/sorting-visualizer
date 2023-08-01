import React, { useState } from "react";
import Menu from "../menu/Menu";
import { generateRandomArray } from "../../utils";
import Bar from "./Bars";

const Home = () => {
  let [size, setSize] = useState(50);
  let [randomArray, setRandomArray] = useState(generateRandomArray(size));
  let [maxEl, setMaxEl] = useState(Math.max(...randomArray));

  let [colorsArray, setColorsArray] = useState(new Array(size).fill(0));

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
          margin: "20px auto",
          flexDirection: "row",
          alignItems: "end",
        }}
      >
        {randomArray.map((item, index) => {
          const height = Math.max(1, (item / maxEl) * 100);
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
