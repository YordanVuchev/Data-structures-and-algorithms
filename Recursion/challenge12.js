// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

const findIsland = function (grid, row, col) {
  let counter = 1;
  grid[row][col] = 0;
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  if (row > 0 && grid[row - 1][col] == 1) {
    a = findIsland(grid, row - 1, col);
  }
  if (col > 0 && grid[row][col - 1] == 1) {
    b = findIsland(grid, row, col - 1);
  }
  if (row < grid.length - 1 && grid[row + 1][col] == 1) {
    c = findIsland(grid, row + 1, col);
  }
  if (col < grid[0].length - 1 && grid[row][col + 1] == 1) {
    d = findIsland(grid, row, col + 1);
  }

  return counter + a + b + c + d;
};

const maxAreaOfIsland = function (grid) {
  let counter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        counter = Math.max(counter, findIsland(grid, row, col));
      }
    }
  }

  return counter;
};

// const input = [
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
// ];

const input2 = [
  [0, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
];
console.log(maxAreaOfIsland(input2));
// console.log(maxAreaOfIsland(input));
