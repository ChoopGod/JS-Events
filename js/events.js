//input from the form
const cowInput = document.getElementById("cow");
const pigInput = document.getElementById("pig");
const elkInput = document.getElementById("elk");

//buttons from form
const validatePig = document.getElementById("evaluatePig");
const validateAll = document.getElementById("evaluateForm");

//Event Listeners for button presses
cowInput.addEventListener("keyup", evaluateCow);
validatePig.addEventListener("click", evaluatePig);
validateAll.addEventListener("click", evaluateAll);

//functions--------------------------------------------------
function evaluateCow() {
if (cowInput.value == "cow") {
    console.log("weeeeee cow!!!");
    cowInput.style.backgroundColor = "green";
} else {
    console.log("no cow!!!");
    cowInput.style.backgroundColor = "red";
}
}
function evaluatePig() {
if (pigInput.value == "pig") {
    console.log("weeeeee pig!!!");
    pigInput.style.backgroundColor = "green";
} else {
    console.log("no pig!!!");
    pigInput.style.backgroundColor = "red";
}
}
function evaluateAll() {
    if (cowInput.value == "cow") {
        console.log("weeeeee cow!!!");
    } else {
        console.log("no cow!!!");
    }

    if (pigInput.value == "pig") {
        console.log("weeeeee Pig!!!");
    } else {
        console.log("no Pig!!!");
    }
    if (elkInput.value == "elk") {
        console.log("weeeeee elk!!!");
        elkInput.style.backgroundColor = "green";
    } else {
        console.log("no elk!!!");
        elkInput.style.backgroundColor = "red";
    }
         // selector and writing here
         selector = document.querySelector('#selector').value
        switch(selector) {
        case "Bird":     
            console.log('Bird');
          break;
        case "Fish":
            console.log("Fish");
          break;
          case "Reptile":     
            console.log("Reptile");
         break;
        case "Insect":
            console.log("Insect");
         break;
        case "Mammal":
            console.log("Mammal");
        break;
        default: console.log("Intet Valgt")
      }
}

//functions--------------------------------------------------

 // selector and writing here
 selector = document.querySelector('#selector').value
 switch(selector) {
 case "Bird":     
     console.log('Bird');
     document.getElementById("h1").innerHTML = "Bird!";
     document.getElementById("text").innerHTML = "You have chosen Bird!";
   break;
 case "Fish":
     console.log("Fish");
     document.getElementById("h1").innerHTML = "Fish!";
     document.getElementById("text").innerHTML = "You have chosen Fish!";
     console.log(getElementById("h1")).innerHTML
     break;
   case "Reptile":     
     console.log("Reptile");
     document.getElementById("h1").innerHTML = "Reptile!";
     document.getElementById("text").innerHTML = "You have chosen Reptile!";
  break;
 case "Insect":
     console.log("Insect");
     document.getElementById("h1").innerHTML = "Insect!";
     document.getElementById("text").innerHTML = "You have chosen Insect!";
  break;
 case "Mammal":
     console.log("Mammal");
     document.getElementById("h1").innerHTML = "Mammal!";
     document.getElementById("text").innerHTML = "You have chosen Mammal!";
 break;
 default: console.log("Intet Valgt")
 document.getElementById("h1").innerHTML = "No Animal Chosen!";
 document.getElementById("text").innerHTML = "Please Choose An Animal!";
}