import { compareAsc, isToday, isThisWeek } from "date-fns";
import { tempStorage } from "./storage";

let projectArray = createProjectArray();
function createProjectArray() {
  const projectArray = [
    ...new Set(
      tempStorage.filter((task) => task.project).map((task) => task.project)
    ),
  ];
  return projectArray;
}

function createTaskArray(choise = "not choosen") {
  console.log(`create a taskList with:${choise} tasks`);
  let currentTaskList = [];
  if (choise === "all") {
    currentTaskList = [...tempStorage];
  } else if (choise === "today") {
    currentTaskList = tempStorage.filter((task) => isToday(task.dueDate));
  } else if (choise === "week") {
    currentTaskList = tempStorage.filter((task) => isThisWeek(task.dueDate));
  } else if (projectArray.includes(choise)) {
    currentTaskList = tempStorage.filter((task) => {
      return task.project === choise;
    });
  } else {
    currentTaskList = [
      { title: "libarian messed up", description: `choise was:${choise}` },
    ];
  }

  return currentTaskList;
}
// by date for now
function sortTasklist(taskList) {
  console.log(taskList);
  taskList.sort((a, b) => {
    return compareAsc(a.dueDate, b.dueDate);
  });
  console.log(taskList);
}

export { createTaskArray, projectArray };
