import { tempStorage } from "./storage";
import { compareAsc, compareDesc, isToday,isThisWeek } from "date-fns";

// Libarian creates an Array of Task
function createTaskList(period = "not choosen") {
  console.log(`create a taskList with:${period} tasks`);
  let currentTaskList = [];
  if (period === "all") {
    currentTaskList = [...tempStorage];
  } else if (period === "today") {
    currentTaskList = tempStorage.filter((task) => isToday(task.dueDate));
  } 
  else if (period === "week") {
    currentTaskList = tempStorage.filter((task) => isThisWeek(task.dueDate));}
  else {
    currentTaskList = [
      { title: "something went wrong ", description: "libarian messed up" },
    ];
  }
  console.log(currentTaskList);
  return currentTaskList;
}
// by date for now
function sortTasklist(taskList) {
  console.log(taskList);
  taskList.sort((a, b) => {
    return compareAsc(a.dueDate, b.dueDate);
    return compareDesc(a.dueDate, b.dueDate);
  });
  console.log(taskList);
}
export { createTaskList };
