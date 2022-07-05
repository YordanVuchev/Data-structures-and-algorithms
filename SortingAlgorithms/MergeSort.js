function mergeSortedArrays(arr1, arr2) {
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  const result = [];
  while (arr1Pointer < arr1.length || arr2Pointer < arr2.length) {
    if (arr2Pointer === arr2.length) {
      result.push(arr1[arr1Pointer]);
      arr1Pointer++;
      continue;
    }
    if (arr1Pointer === arr1.length) {
      result.push(arr2[arr2Pointer]);
      arr2Pointer++;
      continue;
    }
    if (arr1[arr1Pointer] > arr2[arr2Pointer]) {
      result.push(arr2[arr2Pointer]);
      arr2Pointer++;
    } else {
      result.push(arr1[arr1Pointer]);
      arr1Pointer++;
    }
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftPart = mergeSort(arr.slice(0, mid));
  const rightPart = mergeSort(arr.slice(mid));

  return mergeSortedArrays(leftPart, rightPart);
}

console.log(mergeSort([8, 4, 17, 15]));

console.log(
  mergeSort([
    4, 7, 9, 1, 3, 6, 20, 15, 2, 6, 1, 20, 5, 1, 6, 3, 7, 4, 6, 7, 2, 37,
  ])
);

console.log(
  mergeSort([
    -7, -10, -100, -67, -5, -1, 0, -3, -1, -5, -8, 2, 6, 1, 7, 3, 10, 12,
  ])
);
