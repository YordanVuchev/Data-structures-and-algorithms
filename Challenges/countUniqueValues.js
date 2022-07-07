function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let start = 0;
  let next = 1;

  while (next != arr.length) {
    if (arr[start] === arr[next]) {
      next++;
    } else {
      start++;
      arr[start] = arr[next];
    }
  }
  return start + 1;
}

console.log(countUniqueValues([1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 4, 4, 7, 7, 7, 7, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2 - 1, -1, 0, 1])); //4
