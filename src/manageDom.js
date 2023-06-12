// createDOM.js creates/display DOM elements
import { createTaskList } from "./Libarian";

const allCategory = document.querySelector("[data-tasks='all']");
let currentActive;

function changeActive(target) {
  currentActive = document.querySelector("#sidebar>ul .active") ?? allCategory;
  currentActive.classList.remove("active");
  target.classList.add("active");
  currentActive=target
  displayTasks()
}
function displayTasks() {
  const taskList=createTaskList(currentActive.dataset.tasks)
  const taskContainer = document.getElementById("todos");
  taskContainer.textContent = "";
  taskList.forEach((task) => {
    const todo = document.createElement("div");
    todo.classList.add("task");

    // only for now to see all properties
    for (const key in task) {
      const property = document.createElement("div");
      property.classList = key;
      property.textContent = task[key];
      todo.appendChild(property);
    } // ------------------------------

    taskContainer.appendChild(todo);
  });
}

changeActive(allCategory);

export { displayTasks, changeActive };
