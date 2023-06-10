let tempStorage = {
  task_3: {
    title: "title1",
    description: "description1",
    dueDate: "01.01.11",
    priority: "1",
    done: "true",
    // checklist:{1:{done:true}}
    // notes:?are not the same as description,longer text.
  },
  task_222: {
    title: "title2",
    description: "description2",
    dueDate: "02.02.22",
    priority: "2",
    done: "false",
  },
};

// gives back the highest num doesn't pay attention do deleted tasks!
// could be the achilles heel  when trying to mix 2 datasets or when bigger
function nextId() {
  
  // would be safer?
  // maybe this is to complicated last object key+1 would be simpler
  // let keys = Object.keys(tempStorage);

  //   return keys.reduce((acc, key) => {
  //    return Math.max(acc, key.split('_')[1])
  //   }, 0);

  const keys = Object.keys(tempStorage);
  
  // safety when empty or not a number
  if(keys.length===0){return `task_1`}
  const lastIDNum = Number(keys[keys.length - 1].split("_")[1]);
  return `task_${lastIDNum + 1}`;
}

//add to tempStorage
function addToTempStorage(task){
  console.log(tempStorage)
  tempStorage[task[0]]=task[1]
  console.log(tempStorage)
}
//delete form tempStorage
function deleteTaskTemp(id){
  delete tempStorage[id[0]];
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


export { tempStorage,nextId,addToTempStorage,deleteTaskTemp };
