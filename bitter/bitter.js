
//GET:
(function () {

	function getBitts() {
	    console.log("occurring every three minutes");

        // get bitts from storage
	    let storedBittsRaw = localStorage.bitts;

	    let lastBittId = null;
        let storedBitts = null;

	    if (storedBittsRaw) { // if there are any bitts in storage, get ID from the first one (the latest Bitt)
	        storedBitts = JSON.parse(storedBittsRaw);
            lastBittId = storedBitts[0].id;
	    }

	    fetch('http://localhost:5000//get-all-bitts?lastid='+lastBittId)
            .then(function(response) {
                return response.text();
            })
            .then(function(text) {
                console.log(text);

                let response = JSON.parse(text);

                // if browser storage is in sync with server database do this
                if (response.synced) {
                    console.log("Synced!");
                } else { // if not, save the bitts in browser local storage
                    localStorage.bitts = text;
                    storedBitts = JSON.parse(text); // save the bitts also in the storedBitts variable
                }

                // show bitts in HTML
                let container = document.getElementById("bittsContainer");
                container.innerHTML = "";

                for (let bitt of storedBitts) {
                    let bittElement = document.createElement("p");
                    bittElement.innerHTML = bitt.text + "<br> <small>" + bitt.username + "</small>";

                    container.appendChild(bittElement);
                }

            })
            .catch(function(error) {
                console.log('Request failed', error);
            });
	}

	getBitts();  // initial run (before the interval)

	setInterval(getBitts, 180*1000);  // 180 * 1000 miliseconds = 3 min

}())


//POST:

function addNewBitt(){

    let user = document.getElementById("username").value;
    let message = document.getElementById("message").value;

    let jsonData = JSON.stringify({"username": user, "text": message});
    console.log(jsonData);

    fetch("http://localhost:5000/create-bitt", {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
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
};