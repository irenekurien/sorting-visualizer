import { delay } from "../utils/delay";

export const bubbleSort = async ({
  array,
  setArray,
  setColorsArray,
  sortingSpeed,
}) => {
  const len = array.length;

  let swapped;
  for (let i = 0; i < len - 1; i++) {
    swapped = false;
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
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
    setArray(array);
  }
};
