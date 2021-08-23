console.log("Bitter")

let container = document.getElementById("container")

//GET:
fetch("http://localhost:5000/get-all-bitts")
.then(response => response.json())
.then(function(bittObjects){

    for(let bitt of bittObjects) {
        let bittElement = document.createElement("p")
        bittElement.innerHTML = bitt.username + " " + bitt.text;

        container.appendChild(bittElement);
    }
})
.catch(function(error){
    console.log("error");

})

//POST:

function addNewBitt(){

    let user = document.getElementById("username").value;
    let message = document.getElementById("message").value;

    let jsonData = JSON.stringify({"username": user, "text": message});

    fetch("http://localhost:5000/create-bitt", {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
        body: jsonData
    })
    .then(response => response.json())
    .then(function(bitt) {
        let newBitt = document.createElement("p")
        newBitt.innerHTML = bitt.username + " " + bitt.text
        container.prepend(newBitt)

        document.getElementById("username").value = ""
        document.getElementById("message").value = ""

    })
    .catch(function(error) {
        console.log("Request failed: " + error);
    });
});