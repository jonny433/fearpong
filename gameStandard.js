//logic behind the game
console.log("game.js geladen...");

//container for all standard questions
let questions = [
  "Gib deinem Mitspieler zu deiner rechten einen Kuss",
  "Halte 5 Minuten Händchen mit einer Person deiner Wahl",
  "Benimm dich zwei Minuten wie ein Huhn",
  "Tausche die Klamotten mit dem Mitspieler rechts von dir",
  "Erzähle der Person gegenüber, was seine Vorzüge sind",
  "Imitiere ein Tier deiner Wahl",
  "Mach dich im Spiegel selbst an",
  "Spiele Dieter Bohlen und gib für 2 Runden zu allem Kommentare ab",
  "Lass dir von einem Mitspieler eine Frisur stylen",
  "Füttere die Person rechts neben dir mit etwas Leckerem",
  "Veranstalte einen Catwalk wie bei Germany’s next Top Model",
  "Zeig deinen Mitspielern wie ein perfekter Zungenkuss aussieht - aber alleine",
  "Spreche 2 Runden lang nur englisch",
  "Massiere einem Mitspieler deiner Wahl die Füße",
  "Täusche einen totalen Lachkrampf vor",
  "Tu so, als würdest du ein Kind gebären",
  "Trage den BH von einer anderen Person",
  "Rappe über einen Mitspieler",
  "Sprich die nächsten 3 Minuten in Babysprache",
  "Lecke einen Gegenstand in Greifnähe ab",
  "Laufe einmal um die Gruppe herum und belle wie ein Hund",
  "Ziehe ein Kleidungsstück aus. Alle anderen müssen es auch ausziehen",
  "Versuche, für 10 Sekunden zu breakdancen",
  "Spiele eine Sterbeszene",
  "Zeig allen, wie der Moonwalk von Michael Jackson geht",
  "Mach einen Bauchtanz für 1 Minute",
  "Sei bis zum nächsten Treffer der Dorfälteste und sprich jeden mit \"Mein Sohn\" an",
  "Erkläre der Person links von dir, warum du eine Bestrafung verdienst",
  "Tu so, als hättest du eine gespaltene Persönlichkeit und streite mit dir selbst",
  "Imitiere die Person mit den bisher meisten Treffern",
  "Schließe die Augen und errate das Körperteil einer demokratisch gewählten Person mit deiner Hand",
  "Zeit zu strippen! Für jedes ausgezogene Kleidungsstück gibt's nen extra Versuch beim Werfen",
  "Trage ein selbst ausgedachtes Gedicht über einen Begriff vor, den deine Mitspieler bestimmen"
]

local_storage = localStorage;

//set up localStorage in browser
function initStorage(){
  storage = sessionStorage;
  for(let i = 0; i < questions.length; i++){
    storage.setItem(i, questions[i]);
  }
  console.log("initialization of sessionStorage completed");
}

//return element in storage for specific index
function returnStorage(index){
  return storage.getItem(index);
}


let alreadyClicked = [false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false];
let alreadyDrunk = alreadyClicked;

let checkForWinTeam1 = 0;
let checkForWinTeam2 = 0;

function confirmDare(){
  if(window.confirm("Willst du eine Aufgabe machen(Ok) oder trinken(abbrechen)?")) return true
  else return false;
}

//unterste Funktion
function cupClicked(id, num){

  //cup was clicked in the first place?
  //no?
  if(alreadyClicked[num] == false){

    //no the cup was clicked
    alreadyClicked[num] = true;

    //ask for choice drink or dare
    let choice = confirmDare();

    //if they want the task, they will get the task
    if(choice == true){
      let random = Math.floor(Math.random() * questions.length) //random number 0 till questionsStandard.length, pretty simple, question could be showed up multiple times
      document.getElementById("aufgabenfeld").innerHTML = returnStorage(random); //display text
      document.getElementById(id).style.border = "solid black 1px"
    }

    //otherwise the cup is set drunk and out of game
    else{
      document.getElementById(id).style.opacity = 0.2; //setzt den becher transparent
      console.log("Set " + id + " invisible");
      document.getElementById("aufgabenfeld").innerHTML = ""; //zurücksetzen des aufgabenfeldes
      document.getElementById(id).style.border = "solid black 1px"
      alreadyDrunk[num] = true;
      if(num > 9) checkForWinTeam2++;
      else checkForWinTeam1++;
    }
  }

  //yes?
  else{

    //now they dont have any other choices, drink or die
    if(alreadyDrunk[num] == false){
      document.getElementById(id).style.opacity = 0.2; //set cup transparent
      console.log("Set " + id + " invisible");
      document.getElementById("aufgabenfeld").innerHTML = ""; //reset task container
      alreadyDrunk[num] = true;
      if(num > 9) checkForWinTeam2++;
      else checkForWinTeam1++;
    }
    else{
      document.getElementById(id).style.opacity = 0.2; //setzt den becher transparent
      console.log("Set " + id + " invisible");
      document.getElementById("aufgabenfeld").innerHTML = ""; //zurücksetzen des aufgabenfeldes
      if(num > 9) checkForWinTeam2++;
      else checkForWinTeam1++;
    }
  }

  console.log("Team Blau: " + checkForWinTeam1);
  console.log("Team Rot: " + checkForWinTeam2);
  if(checkForWinTeam1 == 10) window.alert("Team Rot gewinnt");
  if(checkForWinTeam2 == 10) window.alert("Team Blau gewinnt");
}


//funktion zum event handeln
function checkForEvents(id, num){
  document.getElementById(id).addEventListener("click", function() {
      cupClicked(id, num);
  }, false);
}


//--------consider everything below that line as main()----------------------

initStorage();

//checking for all the necessary events
checkForEvents("t10", 0);
checkForEvents("t11", 1);
checkForEvents("t12", 2);
checkForEvents("t13", 3);
checkForEvents("t14", 4);
checkForEvents("t15", 5);
checkForEvents("t16", 6);
checkForEvents("t17", 7);
checkForEvents("t18", 8);
checkForEvents("t19", 9);

checkForEvents("t20", 10);
checkForEvents("t21", 11);
checkForEvents("t22", 12);
checkForEvents("t23", 13);
checkForEvents("t24", 14);
checkForEvents("t25", 15);
checkForEvents("t26", 16);
checkForEvents("t27", 17);
checkForEvents("t28", 18);
checkForEvents("t29", 19);
