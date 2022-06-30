function selectionSort(arr) {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }

  return arr;
}

///////////////////////////////////
//        OPTIMIZED VERSION      //
///////////////////////////////////

// function selectionSort(arr) {
//   const swap = (arr, i, j) => {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   };

//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (i !== minIndex) {
//       swap(arr, i, minIndex);
//     }
//   }

//   return arr;
// }

console.log(selectionSort([5, 1, 9, 28, 2, 4, 19, 17]));
