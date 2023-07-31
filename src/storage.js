import { createTask } from "./tasks";
let tempTaskStorage = [
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
// iffe ??
getLocalStorage();

// task storage

//add to tempTaskStorage
function addTaskTemp(task) {
  tempTaskStorage.push(task);
  setLocalStorage(tempTaskStorage);
}
//delete form tempStorage
function deleteTaskTemp(taskToDelete) {
  console.log("delete formTempStorage");
  console.log(taskToDelete);
  const taskIndex = tempTaskStorage.findIndex((task) => task === taskToDelete);

  if (taskIndex !== -1) {
    tempTaskStorage.splice(taskIndex, 1);
  }
  console.log(tempTaskStorage);
}

// local storage
//   set Local Storage
function setLocalStorage(storage) {
  console.log("setLocalStorage");
  let jsonStorage = JSON.stringify(storage);
  localStorage.setItem("tasks", jsonStorage);
}
//   get local Storage
// use a iffe ? or the other think immediatly load module forget the name of it??
function getLocalStorage() {
  console.log("getLocalStorage");
  if (storageAvailable("localStorage")) {
    // only load it when the storage is not empty
    if (localStorage.getItem("tasks")) {
      let jsonReturn = localStorage.getItem("tasks");
      jsonReturn = JSON.parse(jsonReturn);
      console.log(jsonReturn);
      tempTaskStorage = jsonReturn;
    } else {
      // todo example data delete when finished
      addTaskTemp(
        createTask("title2", "description2", "02.02.22", "1", "true")
      );
      addTaskTemp(
        createTask("title1", "description1", "01.01.11", "1", "true")
      );
      addTaskTemp(
        createTask(
          "today",
          "important Today",
          Date.now(),
          3,
          false,
          "todays Project"
        )
      );
      addTaskTemp(
        createTask(
          "1406title",
          "important desription",
          "14.06.2023",
          2,
          false,
          "todays Project"
        )
      );
      addTaskTemp(
        createTask(
          "1306title",
          "important desription",
          "13.06.2023",
          2,
          false,
          "2.Project"
        )
      );
    }
  } else {
    // todo create a banner to warn that there is no local storage
    // how to test this?
  }
}

//should look up if local storage is available
// this is copied from :https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export { tempTaskStorage, addTaskTemp, deleteTaskTemp };
// need to change the tempStorage
// export { tempStorage,addTaskTemp,deleteTaskTemp };
