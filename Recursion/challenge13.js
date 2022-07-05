// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
const arraySum = function (array) {
  let sum = 0;
  for (const obj of array) {
    console.log(typeof obj);
    if (typeof obj === "object") {
      sum += arraySum(obj);
    } else {
      sum += obj;
    }
  }
  return sum;
};

console.log(arraySum([1, [2, 3], [[4]], 5]));
