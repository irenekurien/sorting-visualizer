import { delay } from "../utils/delay";

export const quickSort = async ({
  array,
  setArray,
  setColorsArray,
  sortingSpeed,
}) => {
  
  const changeColor = async (array) => {
    await delay(sortingSpeed);
    setColorsArray(array);
  }

  const partition = async (low, high) => {
    let pivot = array[high];

    // to keep track of the index where the pivot element needs to be placed
    let i = low - 1;

    let newColorsArray = new Array(array.length).fill(0);
    // pivot elemnt
    newColorsArray[high] = 3;
    // subarray being compared to the pivot
    for (let j = low; j < high; j++) {
      newColorsArray[j] = 1;
    }
    
    await changeColor(newColorsArray);

    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;

        [array[i], array[j]] = [array[j], array[i]]

        newColorsArray[i] = 4; 
        newColorsArray[j] = 4;
        
        setArray(array);
        newColorsArray[i] = 1;
        newColorsArray[j] = 1;
        await changeColor(newColorsArray);
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    newColorsArray[i + 1] = 4;
    newColorsArray[high] = 4;

    await changeColor(newColorsArray);
    setArray(array);

    newColorsArray[i + 1] = 3; 

    return i + 1;
  };

  const sort = async (low, high) => {
    if (low < high) {
      let pivotIndex = await partition(low, high);

      await sort(low, pivotIndex - 1);
      await sort(pivotIndex + 1, high);
    }
  };

  let newColorsArray = new Array(array.length).fill(0);

  await sort(0, array.length - 1);

  newColorsArray = newColorsArray.fill(3);
  await changeColor(newColorsArray);
};
