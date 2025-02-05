function merge(firstArray, secondArray) {
  const merged = [];

  let i = 0;
  let j = 0;

  while (merged.length < firstArray.length + secondArray.length) {
    const firstArrayEl = firstArray[i];
    const secondArrayEl = secondArray[j];

    if (
      (firstArrayEl === undefined && secondArrayEl !== undefined) ||
      secondArrayEl <= firstArrayEl
    ) {
      merged.push(secondArrayEl);
      j++;
      continue;
    }

    if (
      (secondArrayEl === undefined && firstArrayEl !== undefined) ||
      firstArrayEl <= secondArrayEl
    ) {
      merged.push(firstArrayEl);
      i++;
      continue;
    }
  }

  return merged;
}

console.log(merge([1, 3, 7, 8], [2, 4, 5, 6]));

function mergeSort(array) {
  if (array.length === 1) return array;

  const midIndex = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, midIndex));
  const right = mergeSort(array.slice(midIndex));

  return merge(left, right);
}

console.log(mergeSort([3, 1, 4, 2]));
