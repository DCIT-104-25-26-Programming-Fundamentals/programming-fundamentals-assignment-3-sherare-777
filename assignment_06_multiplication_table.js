// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// =============================================================================
// YOUR CODE
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------

function printSingleTable(number) {
    console.log(`Multiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number}  x  ${i}  =  ${number * i}`);
    }
}

// -----------------------------------------------------------------------------
// PART B — Tables from 1 to N
// -----------------------------------------------------------------------------

function printTablesUpToN(n) {
    for (let number = 1; number <= n; number++) {
        console.log(`Multiplication Table for ${number}:`);

        for (let i = 1; i <= 12; i++) {
            console.log(`${number}  x  ${i}  =  ${number * i}`);
        }

        if (number < n) {
            console.log('---------------------------');
        }
    }
}

// -----------------------------------------------------------------------------
// MAIN PROGRAM
// -----------------------------------------------------------------------------

function main() {
    const number = Number(
        readlineSync.question('Enter a number for the multiplication table: ')
    );

    if (!Number.isInteger(number) || number <= 0) {
        console.log('Error: Number must be a positive integer.');
        return;
    }

    printSingleTable(number);

    const n = Number(
        readlineSync.question('\nEnter N for tables from 1 to N: ')
    );

    if (!Number.isInteger(n) || n <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }

    printTablesUpToN(n);
}

main();