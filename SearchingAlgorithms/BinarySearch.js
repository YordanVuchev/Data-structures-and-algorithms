function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  for (let i = start; i < arr.length; i++) {
    let middle = Math.ceil((start + end) / 2);
    if (arr[middle] === num) {
      return middle;
    }
    if (arr[middle] > num) {
      end = middle;
    }
    if (arr[middle] < num) {
      start = middle;
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 8, 10, 16, 20, 26, 30, 45], 26));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37], 10));
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
);

// function binarySearch(arr, num) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);
//     if (arr[middle] === num) {
//       return middle;
//     }

//     if (arr[middle] > num) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }

//   return -1;
// }

// binarySearch([20, 27], 300);
