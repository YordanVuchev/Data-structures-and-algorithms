// Write a function factorial which accepts a number and returns the factorial of that number.

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(--num);
}

console.log(factorial(1)); // 4 * 3 * 2  * 1
console.log(factorial(2)); // 4 * 3 * 2  * 1
console.log(factorial(4)); // 4 * 3 * 2  * 1
console.log(factorial(7)); // 4 * 3 * 2  * 1
