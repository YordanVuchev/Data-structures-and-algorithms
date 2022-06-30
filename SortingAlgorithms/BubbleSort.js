function bubbleSort(arr) {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j);
      }
    }
  }
  return arr;
}

///////////////////////////////////
//        OPTIMIZED VERSION      //
///////////////////////////////////

// function bubbleSort(arr) {
//   const swap = (arr, i, j) => {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   };

//   for (let i = arr.length; i > 0; i--) {
//     let noSwap = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         swap(arr, j + 1, j);
//         noSwap = false;
//       }
//     }
//     if (noSwap) break;
//   }
//   return arr;
// }

console.log(bubbleSort([5, 1, 10, 29, 3, 2, 1, 59, 39, 4]));
