let tempStorage = [
  {
    title: "title1",
    description: "description1",
    dueDate: "01.01.11",
    priority: "1",
    done: "true",
    // checklist:{1:{done:true}}
    // notes:?are not the same as description,longer text.
  },
  {
    title: "title2",
    description: "description2",
    dueDate: "02.02.22",
    priority: "2",
    done: "false",
  },
];

// gives back the highest num doesn't pay attention do deleted tasks!
// could be the achilles heel  when trying to mix 2 datasets or when bigger
// function nextId() {
  
//   // would be safer?
//   // maybe this is to complicated last object key+1 would be simpler
//   // let keys = Object.keys(tempStorage);

//   //   return keys.reduce((acc, key) => {
//   //    return Math.max(acc, key.split('_')[1])
//   //   }, 0);

//   const keys = Object.keys(tempStorage);
  
//   // safety when undefined =task_0
//   const lastTask=keys[keys.length - 1]??"task_0"
//   console.log(lastTask)
//   const lastIDNum = Number(lastTask.split("_")[1])??"1";
//   return `task_${lastIDNum + 1}`;
// }

//add to tempStorage
function addTaskTemp(task){
console.log("createTask")
  tempStorage.push(task)
  console.log(tempStorage)
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

// console.log("this loads")

export { tempStorage,addTaskTemp,deleteTaskTemp };
