console.log("welcome to traffic lights game");


let firstLight = document.getElementById("firstLight");
let secondLight = document.getElementById("secondLight");
let thirdLight = document.getElementById("thirdLight");

function redLight(){
    firstLight.classList.remove("black");
    firstLight.classList.add("red");
}

function yellowLight(){
    secondLight.classList.remove("black");
    secondLight.classList.add("yellow");
}

function greenLight(){
    thirdLight.classList.remove("black");
    thirdLight.classList.add("green");
}

function blackLight(){
    firstLight.classList.remove("red");
    firstLight.classList.add("black");

    secondLight.classList.remove("yellow");
    secondLight.classList.add("black");

    thirdLight.classList.remove("green");
    thirdLight.classList.add("black");
}