import { nextId,tempStorage } from "./storage";
// factory function to create task objects
// console.log(nextId);
// create task would i be wrong when this would be in the storage?
function createTask(title, description, dueDate, priority, done) {
  return [[nextId()],{
    title, description, dueDate, priority, done
  }];
}

// edit task ? or delete and create new?

export{createTask}