let storage = {
    111: {
      title: "title1",
      description: "description1",
      dueDate: "01.01.11",
      priority: "1",
      done: "true",
      // checklist:{1:{done:true}}
      // notes:?are not the same as description,longer text.
    },
    222: {
      title: "title2",
      description: "description2",
      dueDate: "02.02.22",
      priority: "2",
      done: "false",
    },
  };
  
// highest id function like a counter 

//   set Local Storage 

let jsonStorage=(JSON.stringify(storage))

localStorage.setItem("testTask",jsonStorage)
//   get local Storage
let jsonReturn=localStorage.getItem("testTask")
jsonReturn=JSON.parse(jsonStorage)

// testing shit
 
  console.log(jsonReturn)



  export {storage}