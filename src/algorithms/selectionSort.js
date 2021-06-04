import { delay } from "../utils/delay";

export const selectionSort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
}) => {
  let len = array.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      const newColorsArray = new Array(len).fill(0);
      newColorsArray[minIndex] = 1;
      newColorsArray[j] = 2;
      newColorsArray[i] = 3;
      
      await delay(visualizationSpeed);

      setColorsArray(newColorsArray);

      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;

    setArray(array);
  }
};
