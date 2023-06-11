import { tempStorage,addToTempStorage,deleteTaskTemp } from "./storage";
import { createTask } from "./tasks";


// playing around testing?
// const test = (document.querySelector("#test").textContent = "index.js works");

let testTask=createTask("newTask","a test "," 22.02.02", "2",true)
console.log("add To TempStorage")
addToTempStorage(testTask)
console.log("delete formTempStorage")
deleteTaskTemp(testTask)