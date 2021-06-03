import { delay } from "../utils/delay";

export const bubbleSort = async ({ array, setArray, setColorsArray }) => {
  let len = array.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      const newColorsArray = new Array(len).fill(0);
      newColorsArray[j + 1] = 1;
      newColorsArray[j] = 2;

      await delay(0.025);

      setColorsArray(newColorsArray);

      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
    setArray(array);
  }
  const newColorsArray = new Array(len).fill(3);
  setColorsArray(newColorsArray);
};
