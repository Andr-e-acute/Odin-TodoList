import { addTaskTemp } from "./storage";
import { createTask } from "./tasks";
import { addProject, createProject } from "./projects";
import {
  changeActiveCategory,
  displayTasks,
  displayProjects,
} from "./manageDom";

const createEventListeners = () => {
  //sidebar categories
  const categories = document.querySelectorAll("nav li");
  categories.forEach((category) => {
    category.addEventListener("click", (e) => {
      changeActiveCategory(e.target.closest("li"));
    });
  });
  //Projects toggle hide
  const projectsCategory = document.querySelector(".projects");
  projectsCategory.addEventListener("click", toggleProjectsVis);

  //addProject btn
  const addProjectBtns = document.querySelectorAll(".addProject");
  addProjectBtns.forEach((addProjectBtn) => {
    addProjectBtn.addEventListener("click", showProjectForm);
  });
  // close ProjectForm
  const closeProjectBtn = document.querySelector(".closeProjectForm");
  closeProjectBtn.addEventListener("click", hideProjectForm);
  // submit ProjectForm
  const submitProject = document.getElementById("projectForm");
  submitProject.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("add Project");
    submitProjectForm();
  });

  // addTaskForm btn
  const addTasksBtn = document.querySelectorAll(".openTaskForm");
  addTasksBtn.forEach((button) => {
    button.addEventListener("click", showTaskForm);
  });

  // close newTaskFrom btn
  const closeTasksBtn = document.querySelector(".closeTaskForm");
  closeTasksBtn.addEventListener("click", hideTaskForm);

  //submit TaskForm btn
  const submitTask = document.querySelector(".taskForm");
  submitTask.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitProjcets");
    submitTaskForm(e);
  });
};

function toggleProjectsVis() {
  //toggle visibility
  const projects = document.querySelectorAll("#sidebar .toggleProjectsVis");
  projects.forEach((project) => {
    project.classList.toggle("hidden");
  });
}
function showProjectForm() {
  const projectForm = document.querySelector(".addProjectForm");
  projectForm.classList.remove("hidden");
  hideTaskForm();
}
function hideProjectForm() {
  const projectForm = document.querySelector(".addProjectForm");
  projectForm.classList.add("hidden");
}
function submitProjectForm() {
  const title = document.getElementById("project-title");
  const color = document.getElementById("project-color");
  const priority = document.getElementById("project-priority");
  addProject(createProject(title.value, color.value, priority.value));
  displayProjects();
  hideProjectForm();
  title.value = "";
  priority.value = 0;
}
function showTaskForm() {
  const taskForm = document.querySelector(".addTask");
  taskForm.classList.remove("hidden");
  hideProjectForm();
}
function hideTaskForm() {
  const taskForm = document.querySelector(".addTask");
  taskForm.classList.add("hidden");
}
function submitTaskForm(e) {
  const form = e.target.closest("form");
  const title = form.querySelector("#task-title");
  const description = form.querySelector("#task-description");
  const dueDate = form.querySelector("#task-dueDate");
  const priority = form.querySelector("#task-priority");
  const task = createTask(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );
  addTaskTemp(task);
  displayTasks();
  hideTaskForm();
  title.value = "";
  description.value="";
}
export { createEventListeners };
