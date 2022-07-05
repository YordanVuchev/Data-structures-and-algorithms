function pivot(arr) {
  let number = arr[0];
  let index = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      let temp = arr[1];
      arr[index] = arr[i];
      arr[i] = temp;
      index++;
    }
  }
}

pivot([5, 8, 10, 2, 6, 1]);
