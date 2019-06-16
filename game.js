//programm beinhalet die logik hinter dem spielfeld
console.log("game.js geladen...");

//container für alle Fragen
let questions = [
"Gib deinem Mitspieler zu deiner rechten einen Kuss",
"Halte 5 Minuten Händchen mit einer Person deiner Wahl",
"Benimm dich zwei Minuten wie ein Huhn",
"Tausche die Klamotten mit dem Mitspieler rechts von dir",
"Erzähle der Person gegenüber, was seine Vorzüge und Macken sind",
"Imitiere ein Tier deiner Wahl",
"Mach dich im Spiegel selbst an",
"Spiele Dieter Bohlen und gib für 2 Runden zu allem Kommentare ab",
"Lass dir von einem Mitspieler eine Frisur stylen",
"Füttere die Person rechts neben dir mit etwas Leckerem",
"Veranstalte einen Catwalk wie bei Germany’s next Top Model",
"Zeig deinen Mitspielern wie ein perfekter Zungenkuss aussieht - aber alleine",
"Spreche 2 Runden lang nur englisch",
"Massiere einem Mitspieer deiner Wahl die Füße",
"Täusche einen totalen Lachkrampf vor",
"Tu so, als würdest du ein kind gebären",
"Trage den BH von einer anderen Person",
"Rappe über einen Mitspieler",
"Sprich die nächsten 3 Minuten in Babysprache",
"Lecke einen Gegenstand in Greifnähe ab",
"Laufe einmal um die Gruppe herum und belle wie ein Hund",
"Ziehe ein Kleidungsstück aus; Alle anderen müssen es auch ausziehen",
"Versuche, für 10 Sekunden zu breakdancen",
"Mache die lustigste Grimasse, die dir einfällt",
"Spiele eine Sterbeszene",
"Zeig allen, wie der Moonwalk von Michael Jackson geht",
"Mach einen Bauchtanz für 1 Minute"
]

function confirmDare(){
  if(window.confirm("Willst du eine Aufgabe machen?")) return true
  else return false;
}

//unterste Funktion
function cupClicked(id){
  let choice = confirmDare();
  if(choice == true){
    let random = Math.floor(Math.random() * questions.length) //zufällige Zahl 0 bis questions.length
    document.getElementById("aufgabenfeld").innerHTML = questions[random]; //ändert den text des aufgabenfeldes
  }
  else{
    //document.getElementById(id).style.display="none";
    document.getElementById(id).style.opacity = 0.2; //setzt den becher transparent
    console.log("Set " + id + " invisible");
    document.getElementById("aufgabenfeld").innerHTML = ""; //zurücksetzen des aufgabenfeldes
  }
}


//funktion zum event handeln
function checkForEvents(id){
  document.getElementById(id).addEventListener("click", function() {
      cupClicked(id);
  }, false);
}


//aufruf der funktion für die verschiedenen becher
checkForEvents("t10");
checkForEvents("t11");
checkForEvents("t12");
checkForEvents("t13");
checkForEvents("t14");
checkForEvents("t15");
checkForEvents("t16");
checkForEvents("t17");
checkForEvents("t18");
checkForEvents("t19");

checkForEvents("t20");
checkForEvents("t21");
checkForEvents("t22");
checkForEvents("t23");
checkForEvents("t24");
checkForEvents("t25");
checkForEvents("t26");
checkForEvents("t27");
checkForEvents("t28");
checkForEvents("t29");
