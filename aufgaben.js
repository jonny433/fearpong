console.log("Aufgaben.js ist geladen");


//its not a really good approach, we know that, but its the simplest and fastest way to develop
function addTaskToStorage(){
  let task = document.getElementById("task").value;
  questions.push(task);
  console.log("Neue Frage: " + questions[questions.length]);
  function(){
    for(let i = 0; i < questions.length; i++){
      local_storage.setItem(i, questions[i]);
    }
    console.log("initialization of localStorage completed");
  }
}
