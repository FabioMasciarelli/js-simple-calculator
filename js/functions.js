/**
 * Switch-case to calculate the result
 *
 * @param {number} num1
 * @param {number} num2
 * @param {string} operator
 * @returns {number}
 */
function calculator (num1, num2, operator) {

    let result = 0;

    switch (operator) {
        case "+": //  operator === "+"
            result = num1 + num2;
            break;

        case "x": // operator === "*"
            result = num1 * num2;
            break;
        
        case "/": // operator === "/"
            result = num1 / num2;
            if (num2 === 0) {
                result = "error";
            }
            break;

        case "-": // operator === "-"
            result = num1 - num2;
            break;

        default:
            console.log("error with operators");
    }

    return result;
}

/**
 * function to show the modal with recents results
 *
 * @param {boolean} modal
 */
function toggleModal(modal) {
    if(modal === true) {
        modalRecent.classList.remove('hidden');
        display.classList.add('hidden');
        const results = localStorage.getItem('results');
        const JSONToResult = JSON.parse(results);
        const listElem = `<li>${JSONToResult}</li>`;
        listResults.innerHTML = listElem;
        } else {
        modalRecent.classList.add('hidden');
        display.classList.remove('hidden');
    }
}
