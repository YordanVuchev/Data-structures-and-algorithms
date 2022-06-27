// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Time complexity O(n)

//Time complexity O(n*n) solution
// function minSubArrayLen(arr, num) {
//   const result = 0;
//   let minCounter = Infinity;
//   let counter = 1;

//   for (let i = 0; i < arr.length; i++) {
//     let flag = false;
//     const curr = arr[i];
//     if (curr >= num) {
//       minCounter = 1;
//       break;
//     }
//     let sum = curr;
//     counter = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       sum += arr[j];
//       counter++;
//       if (sum >= num) {
//         flag = true;
//         break;
//       }
//     }
//     if (flag) {
//       if (minCounter > counter && counter != 1) {
//         minCounter = counter;
//       }
//     }
//   }

//   return minCounter === Infinity ? 0 : minCounter;
// }

//Time complexity O(n) solution

function minSubArrayLen(arr, num) {}

console.log(minSubArrayLen([1, 2, 4, 3], 7)); //2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); //3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
-(-console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))); //2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0

// 2-> because[5,4] is smallest subarray
