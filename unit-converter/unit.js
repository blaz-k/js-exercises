console.log("Welcome to unit converter js")

let convertButton = document.getElementById("convertButton");

let ratio = 0.62137119;

function convertKmToMiles() {
    let km = parseFloat(document.getElementById("km").value);
    let miles = km * ratio;
}

convertButton.addEventListener("click", convertKmToMiles);
