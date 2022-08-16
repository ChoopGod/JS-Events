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
}

//functions--------------------------------------------------