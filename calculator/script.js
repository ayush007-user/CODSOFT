const display = document.querySelector('.input input');
const inputVal = document.querySelectorAll(".buttons button");
let currentInput = "";

inputVal.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;

        if (buttonValue === 'AC') {
            currentInput = "";
            display.value = "";
        } else if (buttonValue === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (buttonValue === '=') {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        } else {
            currentInput += buttonValue;
            display.value = currentInput;
        }
    });
});
