const readlineSync = require('readline-sync');

// Task Manager class to handle tasks
class TaskManager {
    constructor() {
        this.tasks = [];  // Holds the tasks in memory
    }

    // Add a new task
    addTask(taskName) {
        const task = {
            id: this.tasks.length + 1,
            name: taskName,
            completed: false
        };
        this.tasks.push(task);
        console.log(`Task '${taskName}' added successfully!`);
    }

    // View all tasks
    viewTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
        } else {
            console.log("\n--- Your Tasks ---");
            this.tasks.forEach((task) => {
                console.log(`${task.id}. [${task.completed ? 'X' : ' '}] ${task.name}`);
            });
        }
    }

    // Mark task as completed
    markTaskCompleted(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
            console.log(`Task '${task.name}' marked as completed.`);
        } else {
            console.log("Task not found.");
        }
    }

    // Delete a task
    deleteTask(taskId) {
        const index = this.tasks.findIndex(t => t.id === taskId);
        if (index !== -1) {
            const deletedTask = this.tasks.splice(index, 1);
            console.log(`Task '${deletedTask[0].name}' deleted.`);
        } else {
            console.log("Task not found.");
        }
    }
}

// Initialize the task manager
const taskManager = new TaskManager();

// Function to display the menu and handle user input
function displayMenu() {
    const menu = `
    1. Add Task
    2. View Tasks
    3. Mark Task as Completed
    4. Delete Task
    5. Exit
    `;
    console.log(menu);

    const choice = readlineSync.question('Please select an option: ');

    return parseInt(choice);
}

// Main application loop
function startApp() {
    let exitApp = false;
    
    while (!exitApp) {
        const choice = displayMenu();
        
        switch (choice) {
            case 1:
                const taskName = readlineSync.question('Enter task name: ');
                taskManager.addTask(taskName);
                break;
            case 2:
                taskManager.viewTasks();
                break;
            case 3:
                const taskIdToComplete = readlineSync.questionInt('Enter task ID to mark as completed: ');
                taskManager.markTaskCompleted(taskIdToComplete);
                break;
            case 4:
                const taskIdToDelete = readlineSync.questionInt('Enter task ID to delete: ');
                taskManager.deleteTask(taskIdToDelete);
                break;
            case 5:
                exitApp = true;
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

// Start the application
startApp();
