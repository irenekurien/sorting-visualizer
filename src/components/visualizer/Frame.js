import React, { useState } from "react";
import generateRandomArray from "../../utils/randomize";
import Bar from "./Bars";

const Home = () => {
  const [randomArray, setrandomArray] = useState(generateRandomArray(5));

  return <Bar arr={randomArray} />;
};

export default Home;
