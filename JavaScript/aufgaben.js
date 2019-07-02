console.log("Aufgaben.js ist geladen");


//its not a really good approach, we know that, but its the simplest and fastest way to develop
function addTaskToStorage(){
  let task = document.getElementById("task").value;
  questions.push(task);
  let len = questions.length;
  console.log("Neue Frage: " + questions[len]);
  initStorage();
}
