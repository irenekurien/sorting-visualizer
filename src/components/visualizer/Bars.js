import React from "react";

const Bars = ({ arr }) => {
  const maxEl = Math.max(...arr);

  return (
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
      {arr.map((item, index) => {
        const height = (item / maxEl) * 100;
        return (
          <div
            key={index}
            style={{ height: "100%", display: "flex", alignItems: "end" }}
          >
            <div
              style={{
                height: `${height}%`,
                width: `calc((80vw/${arr.length}) - 4px)`,
                background: "#f2edd7",
                margin: "0 2px",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Bars;
