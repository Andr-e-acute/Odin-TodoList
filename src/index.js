import { tempStorage, addTaskTemp, deleteTaskTemp } from "./storage";
import { createEventListener } from "./input";
import { createTask } from "./tasks";
// playing around testing?
// const test = (document.querySelector("#test").textContent = "index.js works");

// test add amd remove test task
// let testTask = createTask("newTask", "a test ", " 22.02.02", "2", true);

// addTaskTemp(testTask);
// deleteTaskTemp(testTask);
// ---------------------------------------


// not testing------------------------------------------
// first load:
createEventListener();
