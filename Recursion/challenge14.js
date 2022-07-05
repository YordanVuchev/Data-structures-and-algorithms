// Largest Surface
// Description
// Write a program that finds the largest possible sequence of equal neighboring elements in a rectangular matrix and prints its size.

// Input
// On the first line you will receive the numbers N and M separated by a single space;
// On the next N lines there will be M numbers separated with spaces - the elements of the matrix;
// Output
// Print the size of the largest area of equal neighboring elements
// Constraints
// 3 <= N, M <= 1024
// Sample tests
// Input
// 5 6
// 1 3 2 2 2 4
// 3 3 3 2 4 4
// 4 3 1 2 3 3
// 4 3 1 3 3 1
// 4 3 3 3 1 1
// Output
// 13

//TODO
const findMaxArea = function (matrix, row, col) {
  let sum = 0;

  if (row + 1 < matrix.length && matrix[row][col] === matrix[row + 1][col]) {
    sum += findMaxArea(matrix, row + 1, col);
  }
  if (!row - 1 < 0 && matrix[row][col] === matrix[row - 1][col]) {
    sum += findMaxArea(matrix, row - 1, col);
  }
  if (
    !col + 1 >= matrix[0].length &&
    matrix[row][col] === matrix[row][col + 1]
  ) {
    sum += findMaxArea(matrix, row, col + 1);
  }
  if (!col - 1 < 0 && matrix[row][col] === matrix[row][col - 1]) {
    sum += findMaxArea(matrix, row, col - 1);
  }

  return sum;
};

const findLargestSurface = function (matrix) {
  let sum = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      sum = Math.max(sum, findMaxArea(matrix, row, col));
    }
  }

  return sum;
};

const input = [
  [1, 3, 2, 2, 2, 4],
  [3, 3, 3, 2, 4, 4],
  [4, 3, 1, 2, 3, 3],
  [4, 3, 1, 3, 3, 1],
  [4, 3, 3, 3, 1, 1],
];

console.log(findLargestSurface(input));
