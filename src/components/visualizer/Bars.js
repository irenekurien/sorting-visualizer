import React from "react";

const Bars = ({ arr }) => {
  const maxEl = Math.max(...arr);

  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
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
                width: `calc((100vw/${arr.length}) - 4px)`,
                border: "2px solid #fff",
                padding: "10px",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Bars;
