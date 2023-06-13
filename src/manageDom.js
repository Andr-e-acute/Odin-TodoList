// createDOM.js creates/display DOM elements
import { createTaskArray, projectArray } from "./Libarian";
import { format, isValid } from "date-fns";

const allCategory = document.querySelector("[data-tasks='all']");
let currentActive;

function changeActive(target) {
  // there should  never be more then 1 active change do querySelector?
  currentActive = document.querySelectorAll(".active") ?? allCategory;
  currentActive.forEach(active=>active.classList.remove("active"))

  target.classList.add("active");
  currentActive = target;
  displayTasks();
}

function displayTasks() {
  const taskList = createTaskArray(currentActive.dataset.tasks);
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
function displayProjects() {
  
  const addProjectBtn =document.querySelector("#sidebar>.addProject")
  const projectDom = document.createElement("li");
  projectDom.classList.add("project");
  projectArray.map((project) => {
  
    projectDom.textContent = project;
    projectDom.dataset.tasks=project;
    addProjectBtn.before(projectDom)
  });
  
}
// creates the tasksArray on first load
changeActive(allCategory);
displayProjects();
export { displayTasks, changeActive };
