// aggiungere event listener a tutti i numeri (0-9)
// quando si clicca su un numero, concatenarlo al numero visualizzato in alto

const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        buttons.classList.add("border-invert");
    })
};

// prendere tutti i numeri e aggiungere eventlistener

const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");
const zero = document.querySelector(".zero");

let num ="";

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        num += numbers[i].innerHTML;
        console.log(numbers[i].innerHTML);
        zero.classList.add("hidden");
        display.innerHTML += numbers[i].innerHTML;
        parseInt(num);
        console.log(num, typeof num);
    })
};

// aggiungere event listener a tutti gli operatori
// quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto

const operators = document.querySelectorAll(".operations");

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
        curOperator = operators[i].innerHTML;
        console.log(operators[i]);

        display.innerHTML = curOperator;
    })
};

// pulsante canc: cliccando il pulsante si resetta il calcolo

const canc = document.querySelector(".delete");

canc.addEventListener("click", function() {
    window.location.reload();
});

