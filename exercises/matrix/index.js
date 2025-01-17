// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


// Solution 1

// Create an empty array of arrays called results
// Create a counter variable, starting at 1
// As long as (start column <= end column) AND ( start row <= end row)
//     Loop from start column to end column
//         At results[start_row][i] assign counter variable
//         increment counter
//     Increment start row
//     Loop start row to end row
//         At results[i][end_column] assign counter variable
//         increment counter
//     Decrement end row
//     ...repeat for other two sides


function matrix(n) {
    const results = [];
  
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
  
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  
      // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  
      // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  
    return results;
  }
  
  module.exports = matrix;
  