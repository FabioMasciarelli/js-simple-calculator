// aggiungere event listener a tutti i numeri (0-9)
// quando si clicca su un numero, concatenarlo al numero visualizzato in alto

const buttons = document.querySelectorAll("button");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        buttons[i].classList.add("border-invert");
    })
};

// prendere tutti i numeri e aggiungere eventlistener

const numbers = document.querySelectorAll(".numbers");
let display = document.querySelector(".display");
const zero = document.querySelector(".zero");
const operators = document.querySelectorAll(".operations");
let curOperator = null;
let num1 ="";

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        console.log(this.innerHTML);
        display.innerHTML += this.innerHTML;
        display.innerHTML = parseInt(display.innerHTML);
    });
};

// aggiungere event listener a tutti gli operatori


for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
        num1 = parseInt(display.innerHTML);
        console.log(num1, typeof num1);
        curOperator = this.innerHTML;
        console.log(operators[i].innerHTML);
        display.innerHTML = "0";
    })
};


// aggiungere event listener al pulsante =
// quando si clicca su =, salvare il secondo operando, 
// effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto

const equal = document.querySelector(".result")

equal.addEventListener("click", function() {
    let num2 = parseInt(display.innerHTML);
    const result = calculator(num1, num2, curOperator);
    console.log(result);
    display.innerHTML = result;
});



// pulsante canc: cliccando il pulsante si resetta il calcolo

const canc = document.querySelector(".delete");

canc.addEventListener("click", function() {
    window.location.reload();
});
