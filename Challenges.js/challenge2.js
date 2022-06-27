// implement function called areThereDuplicates which accepts a variable number of arguments, and checks wheter there are any duplicates among the arguments passed in

// Time complexity : O(n)

function areThereDuplicates(...input) {
  const count = {};

  for (const obj of input) {
    count[obj] = ++count[obj] || 1;
  }

  for (const occurrence of Object.values(count)) {
    if (occurrence > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates("a", "b", "c", "a")); //true
