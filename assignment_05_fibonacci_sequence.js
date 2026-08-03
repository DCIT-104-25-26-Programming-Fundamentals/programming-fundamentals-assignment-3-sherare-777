// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// =============================================================================
// YOUR CODE
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------

function printFibonacciTerms(n) {
    let first = 0;
    let second = 1;
    let sequence = '';

    for (let i = 0; i < n; i++) {
        sequence += first + ' ';

        let next = first + second;
        first = second;
        second = next;
    }

    console.log('Fibonacci sequence: ' + sequence.trim());
}

// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------

function isFibonacciNumber(number) {
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    while (first <= number) {
        if (first === number) {
            return true;
        }

        let next = first + second;
        first = second;
        second = next;
    }

    return false;
}

// -----------------------------------------------------------------------------
// MAIN PROGRAM
// -----------------------------------------------------------------------------

function main() {
    const n = Number(readlineSync.question('How many terms? '));

    if (!Number.isInteger(n) || n <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }

    printFibonacciTerms(n);

    const number = Number(
        readlineSync.question('Enter a number to check: ')
    );

    if (isFibonacciNumber(number)) {
        console.log(number + ' is a Fibonacci number.');
    } else {
        console.log(number + ' is NOT a Fibonacci number.');
    }
}

main();