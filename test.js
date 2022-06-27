function maxSubarraySum(arr, num) {
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;
    for (let j = i; j < num + i; j++) {
      currSum += arr[j];
    }
    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }

  return maxSum;
}
console.log(maxSubarraySum([2, 6, 1, 5, 2, 7, 2], 3));
//                          -     -
