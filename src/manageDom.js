// createDOM.js creates/display DOM elements
import { createTaskList } from "./Libarian";
import { format,isValid } from "date-fns";

const allCategory = document.querySelector("[data-tasks='all']");
let currentActive;

function changeActive(target) {
  currentActive = document.querySelector("#sidebar>ul .active") ?? allCategory;
  currentActive.classList.remove("active");
  target.classList.add("active");
  currentActive = target;
  displayTasks();
}
function displayTasks() {
  const taskList = createTaskList(currentActive.dataset.tasks);
  const taskContainer = document.getElementById("todos");
  taskContainer.textContent = "";
  taskList.forEach((task) => {
    const todo = document.createElement("div");
    todo.classList.add("task");

    // only for now to see all properties
    for (const key in task) {
      const property = document.createElement("div");

      if (key === "dueDate") {
        property.classList = key;
       
        // property.textContent = !isNaN(task[key].getTime())
        //   ? format(task[key], "dd/MM/yyyy")
        //   : "";
       
        // uses date-fns I don't know which one is better
        property.textContent = isValid(task[key])
        ? format(task[key], "dd/MM/yyyy")
        : "";
        todo.appendChild(property);
      } else {
        property.classList = key;
        property.textContent = task[key];
        todo.appendChild(property);
      }
    } // ------------------------------

    taskContainer.appendChild(todo);
  });
}

changeActive(allCategory);

export { displayTasks, changeActive };
