function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = curr;
  }

  return arr;
}

console.log(insertionSort([2, 4, 7, 1]));
//                               7  7
//                            4  4
//                         2  2
//                         1
//
