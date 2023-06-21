import { tempTaskStorage } from "./storage";

//  storage  of the Projects as an array of objects
let projects = [];

// helpers

//Todo check for combing with addProject
function createProject(title, color, priority) {
  return {
    title,
    color,
    priority,
  };
}

function projectsFromLokal() {}

function projectsFromTasks() {
  const projectArray = tempTaskStorage
    .filter((task) => task.project)
    .forEach((task) => addProject(createProject(task.project)));
}

// publics

function addProject(project) {
  // callback for check if project.title is the same
  const isSameTitle = (element) => element.title == project.title;
  if (projects.some(isSameTitle)) {
    // some feedback error that is already there would be useful
        // console.log(project);
        // console.log("is already in");
        // console.log(projects);

    // get the index of matching
    const indexOfOld = projects.findIndex(isSameTitle);
    // loop over the project to add.
    for (const key in projects[indexOfOld]) {
      projects[indexOfOld][key] = projects[indexOfOld][key] ?? project[key];
    }
    return;
  }
  
//   console.log(project);
//   console.log("is new in");
  projects.push(project);
//   console.log(projects);
}

function deleteProject() {}
function getProjectsNames() {}

console.log("------------------------------------------");
console.log("manuell adding test-Project");
addProject(createProject("test", "FFFFFF"));
addProject(createProject("test", "FFFFFF", "overwritten"));
addProject(createProject("test"));
addProject(createProject("test2", "Format of Form", "overwritten"));
addProject(createProject("2.Project", "Format of Form", "overwritten"));
console.log("------------------------------------------");
console.log("creating Project from Task");
projectsFromTasks();
console.log("------------------------------------------");

export { projects };
