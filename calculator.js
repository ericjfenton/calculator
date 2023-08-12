// define variables
let entry1, entry2, operation;
const display = document.querySelector('p');
const buttons = document.querySelectorAll('button');

// entry function for responding to buttons
const buttonResponse = function(e) {
    let btnType = e.target.className;
    if (btnType === 'btn' || btnType === 'wide') {
        let str1 = e.target.innerText;
        switch (str1) {
            case 'Clear':
                display.innerText = 'clear it';
                break;
            case 'Backspace':
                display.innerText = 'back it up';
                break;
            case '/':
                display.innerText = 'divide';
                break;
            case '7':
                display.innerText = 'seven';
                break;
            case '8':
                display.innerText = 'eight';
                break;
            case '9':
                display.innerText = 'nine';
                break;
            case 'x':
                display.innerText = 'multiply';
                break;
            case '4':
                display.innerText = 'four';
                break;
            case '5':
                display.innerText = 'five';
                break;
            case '6':
                display.innerText = 'six';
                break;
            case '-':
                display.innerText = 'minus';
                break;
            case '1':
                display.innerText = 'one';
                break;
            case '2':
                display.innerText = 'two';
                break;
            case '3':
                display.innerText = 'three';
                break;
            case '+':
                display.innerText = 'plus';
                break;
            case '0':
                display.innerText = 'zero';
                break;
            case '.':
                display.innerText = 'decimal';
                break;
            case '=':
                display.innerText = 'Operate!';
                break;
            
            default:
                display.innerText = 'other';
        }
    }
}
buttons.forEach(button => addEventListener('click', buttonResponse));