export const selectionSort = (arr) => {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex > i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};
