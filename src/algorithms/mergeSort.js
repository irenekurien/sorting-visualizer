import { delay } from "../utils/delay";

export const mergeSort = async ({
  array,
  setArray,
  setColorsArray,
  sortingSpeed,
}) => {
    const changeColor = async (array) => {
      await delay(sortingSpeed);
      setColorsArray(array);
    }

    const merge = async (left, mid, right) => {
    // Calculate the sizes of the two subarrays to be merged
    const leftLen = mid - left + 1;
    const rightLen = right - mid;
  
    // Create temporary arrays to hold the left and right subarrays
    const LEFT = new Array(leftLen);
    const RIGHT = new Array(rightLen);

    for (let i = 0; i < leftLen; i++) LEFT[i] = array[left + i];
    for (let j = 0; j < rightLen; j++) RIGHT[j] = array[mid + 1 + j];

    let i = 0, j = 0, k = left;

    while (i < leftLen && j < rightLen) {
      let newColorsArray = new Array(array.length).fill(0);
      newColorsArray[left + i] = 2;
      newColorsArray[mid + 1 + j] = 2;

      await changeColor(newColorsArray);

      if (LEFT[i] <= RIGHT[j]) {
        array[k] = LEFT[i];
        i++;
        newColorsArray[k] = 4;
        newColorsArray[i] = 3;
        await changeColor(newColorsArray);
      } else {
        array[k] = RIGHT[j];
        j++;
        await changeColor(newColorsArray);
      }
      k++;
    }

    while (i < leftLen) {
      let newColorsArray = new Array(array.length).fill(0);
      newColorsArray[left + i] = 1;

      await changeColor(newColorsArray);
      array[k] = LEFT[i];
      i++;
      k++;
    }

    while (j < rightLen) {
      let newColorsArray = new Array(array.length).fill(0);
      newColorsArray[mid + 1 + j] = 1;

      await changeColor(newColorsArray);

      array[k] = RIGHT[j];
      j++;
      k++;
    }
  };

  const mergeSortHelper = async (left, right) => {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    await mergeSortHelper(left, mid);
    await mergeSortHelper(mid + 1, right);

    await merge(left, mid, right);

    setArray([...array]);
  };

  await mergeSortHelper(0, array.length - 1);
};
