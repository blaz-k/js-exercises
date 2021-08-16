console.log("Welcome to unit converter js");
let km = document.getElementById("km");
let button = document.getElementById("button");

let ratio = 0.62137119;

function convertKmToMiles() {
    let miles = parseInt(km.value) * ratio;
    result.textContent = "It is " + miles + " miles";
}

