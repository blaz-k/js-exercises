console.log("guess the secret number game")

let input = document.getElementById("input")
let button = document.getElementById("button")
let result = document.getElementById("result")

let secret = Math.floor(Math.random()*10 + 1)

console.log(secret)

function guessNumber(){
    let guess = parseInt(input.value)

    if (guess === secret){
        console.log("correct");
        result.textContent = "Result: Correct";
        secret = Math.floor(Math.random()*10 + 1);
    }else if (guess < secret){
        console.log("it is bigger");
        result.textContent = "Result: It is bigger";
    }else if (guess > secret){
        console.log("it is smaller");
        result.textContent = "Result: It is smaller";
    }
}