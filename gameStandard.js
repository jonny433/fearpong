//programm beinhalet die logik hinter dem spielfeld
console.log("game.js geladen...");

//container für alle Fragen
let questionsStandard = [
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

let questionsSexy = [
  "Berichte von deinem peinlichsten (oder heißesten) Sex-Erlebnis – und lass keine Details aus",
  "Trinkt aus dem Bauchnabel eines Mitspielers",
  "Lass dir einen Knutschfleck verpassen",
  "Tausche dein Oberteil mit dem Spieler rechts von dir",
  "Versuche mit verbundenen Augen durch Abtasten einen demokratisch gewählten Mitspieler zu erraten",
  "Preise dein Geschlechtsteil wie beim Homeshopping an",
  "Führe einen verführerischen Striptease durch. Wie weit du dich dabei ausziehen musst, legt die Gruppe vorher fest",
  "Sei bis zum nächsten Treffer die Sex-Hotline und verführe jeden der mit dir spricht",
  "Zieh deine Unterhose (und BH) aus und schenke sie einem Spieler aus dem anderen Team",
  "Präsentiere mit deinem linken Mitspieler (angezogen) eine Sex-Stellung deiner Wahl",
  "Lass dich fesseln. Eine Person deiner Wahl darf 1 Minute lang mit dir machen was sie will",
  "Erzähle die Story von dem schrägsten Porno, den du je gesehen hast – oder erfinde direkt selbst einen",
  "Erschmecke anhand eines Kusses, was ein Spieler deiner Wahl als letztes getrunken / gegessen hat",
  "Lass dir von einem Spieler deiner Wahl dein Oberteil mit den Zähnen ausziehen",
  "Küsse die Person des anderen Geschlechts mit den meisten Treffern 10 mal. Du entscheidest wo",
  "Entscheidet demokratisch, welche Person des anderen Geschlechts am besten küssen kann. Prove it!",
  "Alle Spieler entscheiden sich demokratisch für ein Kleidungsstück, dass du ausziehen musst",
  "Zeit für ein Knutschduell! Du und ein Mitspieler vs. 2 Spieler aus dem anderen Team. Alle anderen stimmen über den Gewinner ab",
  "Wähle einen Kuss-Mate für jeden Treffer, den du ab sofort landest"
]

let alreadyClicked = [false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false];

let checkForWinTeam1 = 0;
let checkForWinTeam2 = 0;

function confirmDare(){
  if(window.confirm("Willst du eine Aufgabe machen?")) return true
  else return false;
}

//unterste Funktion
function cupClicked(id, num){
  if(alreadyClicked[num] == false){
    let choice = confirmDare();
    if(choice == true){
      let random = Math.floor(Math.random() * questionsStandard.length) //zufällige Zahl 0 bis questionsStandard.length
      document.getElementById("aufgabenfeld").innerHTML = questionsStandard[random]; //ändert den text des aufgabenfeldes
      document.getElementById(id).style.border = "solid black 1px"
      alreadyClicked[num] = true;
    }
    else{
      //document.getElementById(id).style.display="none";
      document.getElementById(id).style.opacity = 0.2; //setzt den becher transparent
      console.log("Set " + id + " invisible");
      document.getElementById("aufgabenfeld").innerHTML = ""; //zurücksetzen des aufgabenfeldes

      if(num > 9) checkForWinTeam2++;
      else checkForWinTeam1++;
    }
  }
  else{
    //document.getElementById(id).style.display="none";
    document.getElementById(id).style.opacity = 0.2; //setzt den becher transparent
    console.log("Set " + id + " invisible");
    document.getElementById("aufgabenfeld").innerHTML = ""; //zurücksetzen des aufgabenfeldes

    if(num > 9) checkForWinTeam2++;
    else checkForWinTeam1++;
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


//aufruf der funktion für die verschiedenen becher
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
