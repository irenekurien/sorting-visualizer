import { delay } from "../utils/delay";

export const selectionSort = async ({
  array,
  setArray,
  setColorsArray,
  sortingSpeed,
}) => {
  let len = array.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      let newColorsArray = new Array(i)
        .fill(3)
        .concat(new Array(len - 1).fill(0));
      newColorsArray[min] = 1;
      newColorsArray[j] = 2;
      newColorsArray[i] = 3;

      await delay(sortingSpeed);

      setColorsArray(newColorsArray);

      if (array[min] > array[j]) {
        min = j;
      }
    }

    let t = array[i];
    array[i] = array[min];
    array[min] = t;

    setArray(array);
  }
};
