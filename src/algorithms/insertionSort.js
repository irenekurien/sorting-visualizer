import { delay } from "../utils/delay";

export const insertionSort = async ({
  array,
  setArray,
  setColorsArray,
  sortingSpeed,
} = {}) => {
  let len = array.length;
  let newColorsArray = new Array(len).fill(0);

  for (let i = 1; i < len; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      newColorsArray[i] = 3;
      newColorsArray[j] = 2;
      newColorsArray[j + 1] = 1;

      await delay(sortingSpeed);

      setColorsArray(newColorsArray);

      array[j + 1] = array[j];
      array[j] = key;
      array = array.concat();

      newColorsArray = new Array(i).fill(3);
      setArray(array);
      j--;
    }
  }
};
