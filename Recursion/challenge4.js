// Write a function called recursiveRange which accepts a number and adds up all the number from 0 to the number passed to the function

function recursiveRange(num) {
  return num === 0 ? 0 : num + recursiveRange(--num);
}

console.log(recursiveRange(6)); //21 0 + 1 + 2 + 3 + 4 + 5 + 6
