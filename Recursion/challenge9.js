// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array

function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return [];
  }
  arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
  return [arr[0]].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

// let str = "asdaa";
// str = str[0].toUpperCase() + str.slice(1);
// console.log(str);
