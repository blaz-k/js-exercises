console.log("Bitter")

//GET:

let container = document.getElementById("container")

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            let bitts = JSON.parse(xhttp.responseText);

            for ( let i of bitts){
                let bitElement = document.createElement("p");
                bitElement.innerHTML = i.username + " " + i.created + " - " + i.text;
                container.appendChild(bitElement);
            }

        } else {
        console.log("error")
        }
    }
};

xhttp.open("GET", "http://localhost:5000/get-all-bitts", true);
xhttp.send();

//POST:

let username = document.getElementById("username");
let text = document.getElementById("text");
let submit = document.getElementById("submit");
let jsonData;

let xhttp2 = new XMLHttpRequest();


submit.addEventListener("click", function() {
    console.log("CLICK")

    let usernameText = {username: username.value, text: text.value}
    console.log(usernameText)
    jsonData = JSON.stringify(usernameText)


    xhttp2.onload = function(){
        if (this.readyState === 4) {
            if (this.status === 200) {
                bitt = JSON.parse(xhttp.responseText);
                let container = document.getElementById("container");

                let bitElement = document.createElement("p");
                bitElement.innerHTML = bitt.username + " " + bitt.created + " - " + bitt.text;
                container.prepend(bitElement)

                document.getElementById("submit").click();

            } else {
                console.log("ERROR");
            }

        }

    }
    xhttp2.open("POST", "http://localhost:5000/create-bitt", true )
    xhttp2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp2.send(jsonData)

});




