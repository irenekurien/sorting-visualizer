import React from "react";
import { GENERIC, PIVOT, SWAP, KEY } from "../../utils/constants";

const Bars = ({ height, width, code}) => {
  let color = GENERIC;

    switch (code) {
      case 1:
        color = PIVOT;
        break;
      case 2:
        color = SWAP;
        break;
      case 3:
        color = KEY;
        break;
      default:
        color = GENERIC;
    }

  return (
    <div
      style={{
        height: `${height}%`,
        width: `calc((80vw/${width}) - 4px)`,
        background: `${color}`,
        margin: "0 2px",
      }}
    ></div>
  );
};

export default Bars;
