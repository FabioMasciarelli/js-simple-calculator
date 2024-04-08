// aggiungere event listener a tutti i numeri (0-9)
// quando si clicca su un numero, concatenarlo al numero visualizzato in alto

// prendere tutti i numeri e aggiungere eventlistener

const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");
const zero = document.querySelector(".zero");

let firstNum = "";

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        firstNum += numbers[i].innerHTML;
        console.log(numbers[i].innerHTML);
        zero.innerHTML += numbers[i].innerHTML;
        // zero.classList.add("hidden");
    });
}