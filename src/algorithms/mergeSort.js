import { delay } from "../utils/delay";

export const mergeSort = async ({
  array,
  setArray,
  setColorsArray,
  sortingSpeed,
}) => {
    const merge = async (left, mid, right) => {
    // Calculate the sizes of the two subarrays to be merged
    const leftLen = mid - left + 1;
    const rirhtLen = right - mid;
  
    // Create temporary arrays to hold the left and right subarrays
    const LEFT = new Array(leftLen);
    const RIGHT = new Array(rirhtLen);

    for (let i = 0; i < leftLen; i++) LEFT[i] = array[left + i];
    for (let j = 0; j < rirhtLen; j++) RIGHT[j] = array[mid + 1 + j];

    let i = 0, j = 0, k = left;

    while (i < leftLen && j < rirhtLen) {
      let newColorsArray = new Array(array.length).fill(0);
      newColorsArray[left + i] = 1;
      newColorsArray[mid + 1 + j] = 1;

      await delay(sortingSpeed);

      setColorsArray(newColorsArray);

      if (LEFT[i] <= RIGHT[j]) {
        array[k] = LEFT[i];
        i++;
      } else {
        array[k] = RIGHT[j];
        j++;
      }
      k++;
    }

    while (i < leftLen) {
      let newColorsArray = new Array(array.length).fill(0);
      newColorsArray[left + i] = 1;

      await delay(sortingSpeed);

      setColorsArray(newColorsArray);

      array[k] = LEFT[i];
      i++;
      k++;
    }

    while (j < rirhtLen) {
      let newColorsArray = new Array(array.length).fill(0);
      newColorsArray[mid + 1 + j] = 1;

      await delay(sortingSpeed);

      setColorsArray(newColorsArray);

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
