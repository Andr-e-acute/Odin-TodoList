import { tempStorage } from "./storage";
// factory function to create task objects
// Odin requierment factories or constructors/classes to generate them.


function createTask(title, description, dueDate, priority, done) {
  return {
    title, description, dueDate, priority, done
  };
}

// edit task ? or delete and create new?

export{createTask}