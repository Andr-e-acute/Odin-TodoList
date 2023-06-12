import { addTaskTemp } from "./storage";
import { createTask } from "./tasks";

const createEventListener = () => {
  // show taskForm btn
  const addTasksBtn = document.querySelectorAll(".addTaskForm");
  addTasksBtn.forEach((button) => {
    button.addEventListener("click", showTaskForm);
  });

  // close newTaskFrom btn
  const closeTasksBtn = document.querySelector(".closeTaskForm");
  closeTasksBtn.addEventListener("click", hiddeTaskForm);

  //submit TaskForm btn
  const submitTask = document.querySelector(".submitTask");
  submitTask.addEventListener("click", (e) => {
    e.preventDefault();
    submitTaskForm(e);
  });
};

function showTaskForm() {
  const taskForm = document.querySelector(".newTaskForm");
  taskForm.classList.remove("hidden");
}
function hiddeTaskForm() {
  const taskForm = document.querySelector(".newTaskForm");
  taskForm.classList.add("hidden");
}
function submitTaskForm(e) {
  const form = e.target.closest("form");
        //todo don't like it 
  const title = form.querySelector("#task-title").value;
  form.querySelector("#task-title").value=''; 
  const description = form.querySelector("#task-description").value;
  form.querySelector("#task-description").value=''; 
  const dueDate = form.querySelector("#task-dueDate").value;
  form.querySelector("#task-dueDate").value=''; 
  const priority = form.querySelector("#task-priority").value;
  form.querySelector("#task-priority").value='High'; 
    

  const task=createTask(title,description,dueDate,priority)

  addTaskTemp(task)
  hiddeTaskForm()
}
export { createEventListener };
