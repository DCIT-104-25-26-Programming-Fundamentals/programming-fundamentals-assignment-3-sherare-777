const readline = require("readline-sync");

let tasks = [];

// Add a task
function addTask() {
    let task = readline.question("Enter task: ");

    tasks.push(task);

    console.log(`Task added: "${task}"`);
}

// View all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("Your task list is empty.");
        return;
    }

    console.log("Your Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

// Delete a task
function deleteTask() {
    if (tasks.length === 0) {
        console.log("There are no tasks to delete.");
        return;
    }

    viewTasks();

    let taskNumber = readline.questionInt("Enter task number to delete: ");

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Invalid task number.");
        return;
    }

    let deletedTask = tasks[taskNumber - 1];

    tasks.splice(taskNumber - 1, 1);

    console.log(`Task "${deletedTask}" has been removed.`);
}

// Display menu
function showMenu() {
    while (true) {
        console.log("\n============================");
        console.log("       TO-DO LIST MENU");
        console.log("============================");
        console.log("1. Add task");
        console.log("2. View tasks");
        console.log("3. Delete task");
        console.log("4. Quit");

        let choice = readline.question("Enter your choice (1-4): ");

        if (choice === "1") {
            addTask();
        } else if (choice === "2") {
            viewTasks();
        } else if (choice === "3") {
            deleteTask();
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