// define variables
let entry1, entry2, operation;
const display = document.querySelector('p');
const buttons = document.querySelectorAll('button');

// function for adding numbers - test how it looks
const addNum = function(str1) {
    if (display.innerText === '0') {
        entry1 = str1;
    }
    else {
        if (entry1.length < 16) {
        entry1 += str1;
        }
    }
    display.innerText = entry1;
}

// entry function for responding to buttons
const buttonResponse = function(e) {
    let btnType = e.target.className;
    if (btnType === 'btn' || btnType === 'wide') {
        let str1 = e.target.innerText;
        switch (str1) {
            case 'Clear':
                entry1 = undefined;
                entry2 = undefined;
                operation = undefined;
                display.innerText = '0';
                break;
            case 'Backspace':
                display.innerText = 'back it up';
                break;
            case '/':
                display.innerText = 'divide';
                break;
            case '7':
                addNum('7');
                break;
            case '8':
                addNum('8');
                break;
            case '9':
                addNum('9');
                break;
            case 'x':
                display.innerText = 'multiply';
                break;
            case '4':
                addNum('4');
                break;
            case '5':
                addNum('5');
                break;
            case '6':
                addNum('6');
                break;
            case '-':
                display.innerText = 'minus';
                break;
            case '1':
                addNum('1');
                break;
            case '2':
                addNum('2');
                break;
            case '3':
                addNum('3');
                break;
            case '+':
                display.innerText = 'plus';
                break;
            case '0':
                addNum('0');
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