import React, { useState } from "react";
import Menu from "../menu/Menu";
import generateRandomArray from "../../utils/randomize";
import { selectionSort } from "../../algorithms/selectionSort";
import Bar from "./Bars";

const Home = () => {
  const size = 300;
  let [randomArray, setRandomArray] = useState(generateRandomArray(size));
  let [colorsArray, setColorsArray] = useState(new Array(size).fill(0));

  const maxEl = Math.max(...randomArray);

  return (
    <div>
      <Menu size={size} setRandomArray={setRandomArray} />
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
