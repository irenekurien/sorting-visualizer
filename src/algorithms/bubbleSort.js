import { delay } from "../utils/delay";

export const bubbleSort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
}) => {
  let len = array.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      const newColorsArray = new Array(len).fill(0);
      newColorsArray[j + 1] = 1;
      newColorsArray[j] = 2;
      newColorsArray[len - 1 - i] = 3;

      await delay(visualizationSpeed);

      setColorsArray(newColorsArray);

      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
    setArray(array);
  }
};
