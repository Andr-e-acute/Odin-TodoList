import { addTaskTemp } from "./storage";
import { createTask } from "./tasks";
import { changeActiveCategory, displayTasks } from "./manageDom";

const createEventListener = () => {
  //sidebar categories
  const categories = document.querySelectorAll("nav li");
  categories.forEach((category) => {
    category.addEventListener("click", (e) => {
      changeActiveCategory(e.target.closest("li"));
    });
  });
  //Projects toggle hide
  const projectsCatergory = document.querySelector(".projects");
  projectsCatergory.addEventListener("click",clickedProjects 
  );

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
  const submitTask = document.querySelector(".submitTaskForm");
  submitTask.addEventListener("clickProjects", (e) => {
    e.preventDefault();
    submitTaskForm(e);
  });
};
function clickedProjects() {
  //toggle visibilty 
  const projects = document.querySelectorAll("#sidebar .toggleProjectsVis");
  projects.forEach((project) => {
    project.classList.toggle("hidden");
  });
  // creates a Project overview in main 
}

function showProjectForm() {
  console.log("addProject");
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

  addTaskTemp(task);
  displayTasks();
  hideTaskForm();
}
export { createEventListener };
