/**
 * Description placeholder
 *
 * @param {number} num1
 * @param {number} num2
 * @param {string} operator
 * @returns {number}
 */
function calculator (num1, num2, operator) {

    let result = 0;
    switch (operator) {
        case "+": 
            result = num1 + num2;
            break;

        case "X":
            result = num1 * num2;
            break;
        
        case "/":
            result = num1 / num2;
            if (num1 === 0) {
                result = "error";
            }
            break;

        case "-":
            result = num1 - num2;
            break;

        default:
            console.log("error with operators");
    }

    return result;
}
