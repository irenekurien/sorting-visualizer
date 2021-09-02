import { delay } from "../utils/delay";

export const bubbleSort = async ({
  array,
  setArray,
  setColorsArray,
  sortingSpeed,
}) => {
  let len = array.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      let newColorsArray = new Array(len - i)
        .fill(0)
        .concat(new Array(i).fill(3));
      newColorsArray[j + 1] = 1;
      newColorsArray[j] = 2;
      newColorsArray[len - i] = 3;

      await delay(sortingSpeed);

      setColorsArray(newColorsArray);

      if (array[j + 1] < array[j]) {
        let t = array[j + 1];
        array[j + 1] = array[j];
        array[j] = t;
      }
    }
    setArray(array);
  }
};
