let container = document.getElementById("container");

fetch("https://uselessfacts.jsph.pl/random.json?language=en")
.then(response => response.json())
.then(function(factObjects){

        let randomFact = document.createElement("p")
        randomFact.innerHTML = factObjects.text
        container.appendChild(randomFact);

})

.catch(function(error){
    console.log("error");

});
