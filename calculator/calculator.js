
(function (){
    let result = document.getElementById("result");
    result.addEventListener("click", function(){
        let firstNumber = parseFloat(document.getElementById("firstNumber").value);
        let secondNumber = parseFloat(document.getElementById("secondNumber").value);
        let resultText = document.getElementById("resultText");

        let arithmeticOperation = document.getElementById("arithmeticOperation");

        if (arithmeticOperation.value === "+"){
            resultText.textContent = firstNumber + secondNumber;
        }else if (arithmeticOperation.value === "-"){
            resultText.textContent = firstNumber - secondNumber;
        }else if (arithmeticOperation.value === "/"){
            resultText.textContent = firstNumber / secondNumber;
        }else if (arithmeticOperation.value === "*"){
            resultText.textContent = firstNumber * secondNumber;
        }
    });

}())

