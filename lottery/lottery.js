
(function(){
    console.log("Lottery");

    let result = document.getElementById("generateNumbersButton");
    result.addEventListener("click", function(){
        let firstNumber = parseInt(document.getElementById("firstNumber").value);
        let lastNumber = parseInt(document.getElementById("lastNumber").value);
        let howManyNumbers = parseInt(document.getElementById("howManyNumbers").value);
        let numArray = [];


        for (let i=0; numArray.length < howManyNumbers; i++){
            let random = Math.floor(Math.random() * 10);
            numArray.push(random);

        }

        console.log(numArray)
    })

}())