let container = document.getElementById("container");

fetch("https://uselessfacts.jsph.pl/random.json?language=en")
.then(response => response.json())
.then(function(factObject){
        console.log(factObject)

        let randomFact = document.createElement("p")
        randomFact.innerHTML = factObject.text

})

.catch(function(error){
    console.log("error");

});
