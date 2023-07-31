import { tempStorage } from "./storage";
// factory function to create task objects
// Odin requirement factories or constructors/classes to generate them.

function createTask(title, description, dueDate, priority, done=false,project) {
  return {
    title,
    description,
    dueDate:new Date(dueDate),
    priority,
    done,
    project
  };
}

//------------------------------------------
// I have everything in storage? d
// do i need to create a task obj ?
// --------------------------------------------
// edit task ? or delete and create new?

export { createTask };
