import { compareAsc, isToday, isThisWeek } from "date-fns";
import { tempTaskStorage } from "./storage";

let projectArray = createProjectArray();
function createProjectArray() {
  const projectArray = [
    ...new Set(
      tempTaskStorage.filter((task) => task.project).map((task) => task.project)
    ),
  ];

  return projectArray;
}

function createTaskArray(choise = "not choosen") {
  let currentTaskList = [];
  if (choise === "all") {
    currentTaskList = [...tempTaskStorage];
  } else if (choise === "today") {
    currentTaskList = tempTaskStorage.filter((task) => isToday(task.dueDate));
  } else if (choise === "week") {
    currentTaskList = tempTaskStorage.filter((task) => isThisWeek(task.dueDate));
  } else if (projectArray.includes(choise)) {
    currentTaskList = tempTaskStorage.filter((task) => {
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

export { createTaskArray };
