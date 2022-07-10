// Find the 3 maximums in an array

const tripleMaxes = function (arr) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (currNum > max1) {
      max1 = currNum;
    } else if (currNum > max2) {
      max2 = currNum;
    } else if (currNum > max3) {
      max3 = currNum;
    }
  }

  console.log(
    max1 === -Infinity ? "" : max1,
    max2 === -Infinity ? "" : max2,
    max3 === -Infinity ? "" : max3
  );
};

tripleMaxes([150, 2, 5, 20, 150, 30, 2, 5, 1, 20, 1, 5, 6]);
tripleMaxes([100, 6]);
tripleMaxes([60]);
