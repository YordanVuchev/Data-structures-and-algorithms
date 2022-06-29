function linearSearch(arr, num) {
  for (const [index, item] of arr.entries()) {
    if (item === num) {
      return index;
    }
  }

  return -1;
}

console.log(linearSearch([6, 1, 20, 15, 6, 10], 15));
console.log(linearSearch([6, 1, 20, 15, 6, 10], 90));
