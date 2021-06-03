const generateRandomArray = (size) => {
  let randomizedArray = [];

  for (let i = 0; i < size; i++) {
    randomizedArray.push(Math.floor(Math.random() * 100));
  }
  return randomizedArray;
};

export default generateRandomArray;
