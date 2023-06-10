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

// highest id function doesn't pay attention do deleted tasks!
// maybe this is to complicated last object key+1 would be simpler
function nextId() {
  // would be safer?
  // let keys = Object.keys(tempStorage);

  //   return keys.reduce((acc, key) => {
  //    return Math.max(acc, key.split('_')[1])
  //   }, 0);
  const keys = Object.keys(tempStorage);
  const lastIDNum = Number(keys[keys.length - 1].split("_")[1]);
    // safety when empty or not a number
  return `task_${lastIDNum + 1}`;
}

//add to tempStorage

//delete form tempStorage

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
  console.log(jsonReturn);
  return jsonReturn;
  //   only console.log for now.
}
// setLocalStorage(tempStorage);
// getLocalStorage();
console.log(nextId());

export { tempStorage };
