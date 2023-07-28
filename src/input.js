import { addTaskTemp } from "./storage";
import { createTask } from "./tasks";
import { changeActiveCategory, displayTasks ,displayProjects } from "./manageDom";
import {addProject, createProject}from"./projects";

const createEventListener = () => {
  //sidebar categories
  const categories = document.querySelectorAll("nav li");
  categories.forEach((category) => {
    category.addEventListener("click", (e) => {
      changeActiveCategory(e.target.closest("li"));
    });
  });
  //Projects toggle hide
  const projectsCategory = document.querySelector(".projects");
  projectsCategory.addEventListener("click", clickedProjects);

  //addProject btn
  const addProjectBtn = document.querySelector(".addProject");
  addProjectBtn.addEventListener("click", showProjectForm);

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
  // submit ProjectForm
  const submitProject = document.getElementById("projectForm");
  submitProject.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("add Project");
    submitProjectForm(e);
  });
};
function clickedProjects() {
  //toggle visibility
  const projects = document.querySelectorAll("#sidebar .toggleProjectsVis");
  projects.forEach((project) => {
    project.classList.toggle("hidden");
  });
  // creates a Project overview in main
}

function showProjectForm() {
  console.log("addProject");
}
function submitProjectForm(e) {
  const title = document.getElementById("project-title");
  const color = document.getElementById("project-color");
  const priority = document.getElementById("project-priority");
  addProject(createProject(title.value, color.value, priority.value))
  displayProjects()
  
  console.log(title.value);
  console.log(color.value);
  console.log(priority.value);
}

function showTaskForm() {
  console.log("showTask");
  const taskForm = document.querySelector(".addTask");
  taskForm.classList.remove("hidden");
}
function hideTaskForm() {
  const taskForm = document.querySelector(".addTask");
  taskForm.classList.add("hidden");
}
function submitTaskForm(e) {
  console.log("submit task");
  const form = e.target.closest("form");
  //todo don't like it DRY
  const title = form.querySelector("#task-title").value;
  form.querySelector("#task-title").value = "";
  const description = form.querySelector("#task-description").value;
  form.querySelector("#task-description").value = "";
  const dueDate = form.querySelector("#task-dueDate").value;
  form.querySelector("#task-dueDate").value = "";
  const priority = form.querySelector("#task-priority").value;
  form.querySelector("#task-priority").value = "High";

  const task = createTask(title, description, dueDate, priority);
  console.log(task);
  addTaskTemp(task);
  displayTasks();
  hideTaskForm();
}
export { createEventListener };
