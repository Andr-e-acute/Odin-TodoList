import { createTaskArray } from "./Libarian";
import { projects } from "./projects";
import { format, isValid, parseISO } from "date-fns";
const allCategory = document.querySelector("[data-tasks='all']");

function changeActiveCategory(target) {
  const currentActive = document.querySelector(".active") ?? allCategory;
  currentActive.classList.remove("active");
  target.classList.add("active");
  displayTasks();
}

function displayProjects() {
  const addProjectBtn = document.querySelector("#sidebar>.addProject");
  const domProjects = document.querySelectorAll(".project");
  domProjects.forEach((domProject) => {
    domProject.remove();
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
  const taskList = createTaskArray(
    document.querySelector(".active").dataset.tasks
  );
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
        property.textContent = isValid(parseISO(task[key]))
          ? format(parseISO(task[key]), "dd/MM/yyyy")
          : "";
        todo.appendChild(property);
      } else {
        property.classList = key;
        property.textContent = task[key];
        todo.appendChild(property);
      }
    }
    taskContainer.appendChild(todo);
  });
}

// creates the tasksArray on first load needs to be changend when
changeActiveCategory(allCategory);
displayProjects();
export { displayTasks, changeActiveCategory, displayProjects };
