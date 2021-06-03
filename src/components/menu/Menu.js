import React from "react";
import "./menuStyles.scss";

const MenuApp = (props) => {
  return (
    <section className="menu">
      <button className="menu-button text">Generate New Array</button>
      <div className="range">
        <label className="text" htmlFor="array-size">
          Change array size
        </label>
        <input className="menu-range" type="range" min="4" max="30" />
        <span className="text"></span>
      </div>
      <div>
        <button className="menu-button text">Merge Sort</button>
        <button className="menu-button text">Quick Sort</button>
        <button className="menu-button text">Heap Sort</button>
        <button className="menu-button text">Bubble Sort</button>
      </div>

      <button className="menu-button text menu-toggle">Sort!</button>
    </section>
  );
};

export default MenuApp;
