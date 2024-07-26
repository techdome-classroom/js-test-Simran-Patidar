const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const solve = function (grid, i, j) {
  grid[i][j] = '$';

  for (let k = 0; k < 4; k++) {
    let new_i = i + direction[k][0];
    let new_j = j + direction[k][1];

    if (
      new_i >= 0 &&
      new_i < grid.length &&
      new_j >= 0 &&
      new_j < grid[0].length &&
      grid[new_i][new_j] == 'L'
    ) {
      solve(grid, new_i, new_j);
    }
  }
};

const getTotalIsles = function (grid) {
  // write your code here
  let m = grid.length;
  let n = grid[0].length;

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "L") {
        count++;
        solve(grid, i, j);
      }
    }
  }

  return count;
};

let grid= [
  ["L","L","W","W","W"],
  ["L","L","W","W","W"],
  ["W","W","L","W","W"],
  ["W","W","W","L","L"],
]

console.log(getTotalIsles(grid));
module.exports = getTotalIsles;
