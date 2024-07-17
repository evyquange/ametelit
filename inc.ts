/// Proposal with the corresponding dimension of the specified size.
/// Creates a 2D array with the given number of rows and columns, initialized to the specified value.
function createMatrix(rows: number, cols: number, value: number): number[][] {
    const matrix: number[][] = Array.from({ length: rows }, () => Array(cols).fill(value));
    return matrix;
}

const matrix = createMatrix(3, 4, 7);
console.log(matrix);
