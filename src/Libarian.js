import { tempStorage } from "./storage";

// Libarian creates an Array of Task
function createTaskList(period = "not choosen") {
  console.log(`create a taskList with:${period} tasks`);
  if (period === "all") {
    return tempStorage;
  } else
    return [
      { title: "something went wrong ", description: "libarian messed up" },
    ];
}

export { createTaskList };
