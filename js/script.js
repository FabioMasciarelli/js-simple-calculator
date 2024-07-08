// aggiungere event listener a tutti i numeri (0-9)
// quando si clicca su un numero, concatenarlo al numero visualizzato in alto

const openModalRecentBtn = document.getElementById('open-modal');
const modalRecent = document.querySelector('.recent-modal');
const closeModalRecentBtn = document.querySelector('#close-modal');
const numbers = document.querySelectorAll(".number");
let display = document.querySelector(".display");
const zero = document.querySelector(".zero");
let operators = document.querySelectorAll(".operations");
let curOperator = null;
let num1 = null;
let num2 = null;

openModalRecentBtn.addEventListener('click',  function() {
    modalRecent.classList.remove('hidden');
    openModalRecentBtn.classList.add('hidden');
    display.classList.add('hidden');
});

closeModalRecentBtn.addEventListener('click', function() {
    modalRecent.classList.add('hidden');
    openModalRecentBtn.classList.remove('hidden');
    display.classList.remove('hidden');
});


// prendere tutti i numeri e aggiungere eventlistener
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        console.log(this.innerHTML);
        display.innerHTML += this.innerHTML;
        display.innerHTML = parseInt(display.innerHTML);
    })
};

// aggiungere event listener a tutti gli operatori
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
        num1 = parseInt(display.innerHTML);
        console.log(num1, typeof num1);
        curOperator = this.innerHTML;
        console.log(this.innerHTML);
        display.innerHTML = "0";
        console.log(display.innerHTML);
    })
};


// aggiungere event listener al pulsante =
// quando si clicca su =, salvare il secondo operando, 
// effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto

const equal = document.querySelector(".result")

equal.addEventListener("click", function() {
    num2 = parseInt(display.innerHTML);
    const result = calculator(num1, num2, curOperator);
    console.log(result);
    display.innerHTML = result;
});



// pulsante canc: cliccando il pulsante si resetta il calcolo

const canc = document.querySelector(".delete");

canc.addEventListener("click", function() {
    display.innerHTML = 0;
    num1 = 0;
    num2 = 0;
    operators = "";
});
