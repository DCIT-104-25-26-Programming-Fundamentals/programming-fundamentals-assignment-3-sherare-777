// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// =============================================================================
// YOUR CODE
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// Part A — Transpose a Matrix
// -----------------------------------------------------------------------------

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transpose = [];

    for (let j = 0; j < columns; j++) {
        const newRow = [];

        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }

        transpose.push(newRow);
    }

    return transpose;
}

// -----------------------------------------------------------------------------
// Part B — Add Two Matrices
// -----------------------------------------------------------------------------

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const columns = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

// -----------------------------------------------------------------------------
// Part C — Multiply Two Matrices
// -----------------------------------------------------------------------------

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const columnsA = matrixA[0].length;
    const columnsB = matrixB[0].length;
    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];

        for (let j = 0; j < columnsB; j++) {
            let sum = 0;

            for (let k = 0; k < columnsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}

// -----------------------------------------------------------------------------
// Display Matrix
// -----------------------------------------------------------------------------

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = '';

        for (let j = 0; j < matrix[i].length; j++) {
            row += String(matrix[i][j]).padStart(6);
        }

        console.log(row);
    }
}

// -----------------------------------------------------------------------------
// Read Matrix
// -----------------------------------------------------------------------------

function readMatrix(rows, columns) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const input = readlineSync.question(`Enter row ${i + 1}: `);
        const values = input.split(' ').map(Number);

        matrix.push(values);
    }

    return matrix;
}

// -----------------------------------------------------------------------------
// Main Program
// -----------------------------------------------------------------------------

function main() {
    console.log('PART A — Transpose a Matrix');

    const rows = Number(readlineSync.question('Enter number of rows: '));
    const columns = Number(readlineSync.question('Enter number of columns: '));

    const matrix = readMatrix(rows, columns);

    console.log('\nOriginal Matrix:');
    displayMatrix(matrix);

    const transposed = transposeMatrix(matrix);

    console.log('\nTransposed Matrix:');
    displayMatrix(transposed);

    console.log('\nPART B — Add Two Matrices');

    const addRows = Number(readlineSync.question('Enter number of rows: '));
    const addColumns = Number(readlineSync.question('Enter number of columns: '));

    console.log('\nEnter Matrix A:');
    const matrixA = readMatrix(addRows, addColumns);

    console.log('\nEnter Matrix B:');
    const matrixB = readMatrix(addRows, addColumns);

    const sum = addMatrices(matrixA, matrixB);

    console.log('\nMatrix A + Matrix B:');
    displayMatrix(sum);

    console.log('\nPART C — Multiply Two Matrices');

    const rowsA = Number(readlineSync.question('Enter rows for Matrix A: '));
    const columnsA = Number(readlineSync.question('Enter columns for Matrix A: '));

    console.log('\nEnter Matrix A:');
    const matrixC = readMatrix(rowsA, columnsA);

    const rowsB = Number(readlineSync.question('Enter rows for Matrix B: '));
    const columnsB = Number(readlineSync.question('Enter columns for Matrix B: '));

    if (columnsA !== rowsB) {
        console.log('Error: Matrix multiplication is not possible.');
        console.log('The columns of Matrix A must equal the rows of Matrix B.');
        return;
    }

    console.log('\nEnter Matrix B:');
    const matrixD = readMatrix(rowsB, columnsB);

    const product = multiplyMatrices(matrixC, matrixD);

    console.log('\nMatrix A x Matrix B:');
    displayMatrix(product);
}

main();