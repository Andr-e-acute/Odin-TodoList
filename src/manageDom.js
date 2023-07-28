// createDOM.js creates/display DOM elements
import { createTaskArray } from "./Libarian";
import { projects } from "./projects";
import { format, isValid } from "date-fns";

const allCategory = document.querySelector("[data-tasks='all']");
let currentActive;

function changeActiveCategory(target) {
  // there should  never be more then 1 active change do querySelector?
  currentActive = document.querySelectorAll(".active") ?? allCategory;
  currentActive.forEach((active) => active.classList.remove("active"));

  target.classList.add("active");
  currentActive = target;
  displayTasks();
}

function displayProjects() {
  const addProjectBtn = document.querySelector("#sidebar>.addProject");
  const domProjects = document.querySelectorAll(".project");
  
  domProjects.forEach((domProject) => {
    domProject.remove()
  });
  
  projects.forEach((project) => {
    const projectDom = document.createElement("li");
    projectDom.classList.add("project");
    projectDom.classList.add("toggleProjectsVis");

    projectDom.textContent = project.title;
    projectDom.dataset.tasks = project.title;

    addProjectBtn.after(projectDom);
  });
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

// creates the tasksArray on first load
changeActiveCategory(allCategory);
displayProjects();
export { displayTasks, changeActiveCategory, displayProjects };
