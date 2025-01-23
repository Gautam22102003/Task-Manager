###Task-Manager
I have made a fully JavaScript-based project without using HTML and CSS, we can focus on building a command-line application or a node.js application. 
 A simple Task Manager (To-Do List) using Node.js and in-memory storage. It can be a command-line application where users can add, view, and delete tasks.
This will demonstrate your understanding of JavaScript logic, arrays, and how to handle basic input/output operations in a JavaScript environment.

### Project Idea: Command-Line To-Do List with Node.js
 
**Project Features**
•	Add a task.
•	View all tasks.
•	Delete a task.
•	Mark a task as completed.
•	Save tasks in an in-memory array (no external storage like a database).
________________________________________
**Key Updates**:
Functionality Completion: The code now includes the full functionality for adding, viewing, completing, and deleting tasks, along with handling user input through the readline-sync package.
Error Handling: Added checks for invalid task IDs when completing or deleting tasks.
Clean Exit: The app will exit gracefully if the user chooses option 5 ("Exit").

**Running the App**:
I have initialized a Node.js project :
- npm init -y
Install readline-sync:
- npm install readline-sync
Then you can run the taskManager.js script by using:
- node taskManager.js

**Features Recap**:
- Add tasks, view tasks, mark tasks as completed, and delete tasks, all managed in-memory without a database.
- The user interacts with the system using a command-line interface (CLI).
