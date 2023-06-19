import { createTask } from "./tasks";
let tempStorage = [
  // {
  //   title: "title1",
  //   description: "description1",
  //   dueDate: "01.01.11",
  //   priority: "1",
  //   done: "true",
  //   // checklist:{1:{done:true}}
  //   // notes:?are not the same as description,longer text.
  // },
  // {
  //   title: "title2",
  //   description: "description2",
  //   dueDate: "02.02.22",
  //   priority: "2",
  //   done: "false",
  // },
];

// ---------------------------------------

addTaskTemp(createTask("title2", "description2", "02.02.22", "1", "true"));
addTaskTemp(createTask("title1", "description1", "01.01.11", "1", "true"));
addTaskTemp(createTask("today","important Today",Date.now(),3,false,"todays Project"))
addTaskTemp(createTask("1406title","important desription","14.06.2023",2,false,"todays Project"))
addTaskTemp(createTask("1306title","important desription","13.06.2023",2,false,"2.Project"))


//add to tempStorage
function addTaskTemp(task){

  tempStorage.push(task)
  
}
//delete form tempStorage
function deleteTaskTemp(taskToDelete){
  console.log("delete formTempStorage")
  console.log(taskToDelete)
  const taskIndex = tempStorage.findIndex(task => task === taskToDelete);

  if (taskIndex !== -1) {
    tempStorage.splice(taskIndex, 1);
  }
  console.log(tempStorage)
}
//   set Local Storage
function setLocalStorage(storage) {
  let jsonStorage = JSON.stringify(storage);
  localStorage.setItem("tasks", jsonStorage);
}
//   get local Storage
function getLocalStorage() {
  // need some Kind of safety when empty and  tempStorage isn't
  let jsonReturn = localStorage.getItem("tasks");
  jsonReturn = JSON.parse(jsonReturn);
  return jsonReturn;
}




export { tempStorage,addTaskTemp,deleteTaskTemp };
