const readline = require("readline-sync");

let students = [];

// Add a student
function addStudent() {
    let name = readline.question("Student name: ");
    let id = readline.questionInt("Student ID: ");

    let numberOfScores = readline.questionInt("How many scores? ");
    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        let score = readline.questionFloat(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    let student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

// Calculate average score
function calculateAverage(scores) {
    if (scores.length === 0) {
        return 0;
    }

    let total = 0;

    for (let score of scores) {
        total += score;
    }

    return total / scores.length;
}

// Display all students
function displayAllStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\nStudent Records:");
    console.log("-----------------------------------------------");

    for (let student of students) {
        let average = calculateAverage(student.scores);

        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        console.log(`Average: ${average.toFixed(2)}`);
        console.log("-----------------------------------------------");
    }
}

// Calculate average for a specific student
function calculateStudentAverage() {
    let id = readline.questionInt("Enter student ID: ");

    let student = students.find(function(student) {
        return student.id === id;
    });

    if (!student) {
        console.log("Student ID not found.");
        return;
    }

    let average = calculateAverage(student.scores);

    console.log(`${student.name}'s average score: ${average.toFixed(2)}`);
}

// Display menu
function showMenu() {
    while (true) {
        console.log("\n================================");
        console.log("   STUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        let choice = readline.question("Enter your choice (1-4): ");

        if (choice === "1") {
            addStudent();
        } else if (choice === "2") {
            displayAllStudents();
        } else if (choice === "3") {
            calculateStudentAverage();
        } else if (choice === "4") {
            console.log("Goodbye!");
            break;
        } else {
            console.log("Invalid choice. Please enter a number from 1 to 4.");
        }
    }
}

// Start the program
showMenu();