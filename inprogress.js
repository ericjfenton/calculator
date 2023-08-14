// define variables
let displayNum = '0';
let storedNum, operation;
const display = document.querySelector('p');
const buttons = document.querySelectorAll('button');

// use toString() to change numbers to string
// numbers with commas not recognized as numbers

// function to format display with commas
// warning: do not copy this format to displayNum
const addComma = function(str1) {
    console.log("top of comma");
    // add logic to retain trailing decimal
    if (str1[str1.length -1] === '.') {
        console.log("trailing decimal");
        let asNumber = +str1;
        return asNumber.toLocaleString() + '.';
    }
    // add logic to retain trailing zeroes
    let index = str1.length -1;
       if (str1.includes('.') && str1[index] === '0') {
          console.log('in trailing zero routine');
          let pad = "";
           while (str1[index] === '0') {
                pad += '0';
                index--;
           }
           if (str1[index] === '.') {
            pad  = '.' + pad;
           }
        let num1 = +str1;
        let answer1 = num1.toLocaleString();
        return answer1 + pad;
        }

    let asNumber = +str1;
    console.log("bottom of comma");
    return asNumber.toLocaleString();
}

// function for entering numbers
const addNum = function(str1) {
    // disable entry after overflow or divide by 0 error
    if (display.innerText === 'Overflow' || display.innerText === 'Divide by 0 error') {
        return;
    }
    // patch for entry after = (not good practice)
    if (operation === undefined && displayNum === undefined) {
        storedNum = undefined;
    }
    // don't add second decimal
    if (str1 === '.' && displayNum !== undefined) {
        if (displayNum.includes('.')) {
            return;
        }
    }
    // if second number, need to replace the display
    if (displayNum === undefined) {
        if (str1 === '.') {
            str1 = '0.';
        }
        display.innerText = addComma(str1);
        displayNum = str1;
        return;
    }
    if (display.innerText === '0') {
        if (str1 === '.') {
            str1 = '0.';
        }
        displayNum = str1;
    }
    else {
        if (displayNum.length < 16) {
        displayNum += str1;
        }
    }
    display.innerText = addComma(displayNum);
}

// reset function for errors
const reset = function() {
    operation = undefined;
    displayNum = undefined;
    storedNum = undefined;
}

// function for operating on two numbers
const operate = function() {
    // do nothing if all elements not present
    if (!storedNum || !displayNum || !operation) {
        return;
    }
    let answer;
    switch (operation) {
        case '+':
            answer = (+storedNum + +displayNum).toString();
            // if overflow, say so and reset
            if (answer.length > 16) {
                display.innerText = 'Overflow';
                reset();
                break;
            }
            display.innerText = addComma(answer);
            reset();
            storedNum = answer; // setup for another operation
            break;

        case '-':
            answer = (+storedNum - +displayNum).toString();
            if (answer < -999999999999999) {
                display.innerText = 'Overflow';
                reset();
                break;
                }
                if (answer.length > 16) {
                    answer = answer.slice(0,16);
                    }
            display.innerText = addComma(answer);
            reset();
            storedNum = answer;
            break;

        case 'x':
            answer = (+storedNum * +displayNum).toString();
            if (answer > 9999999999999999 || answer < -999999999999999) {
                display.innerText = 'Overflow';
                reset();
                break;
                }
                if (answer.length > 16) {
                    answer = answer.slice(0,16);
                    }
            display.innerText = addComma(answer);
            reset();
            storedNum = answer;
            break;

        case '/':
            if (displayNum === '0') {
                display.innerText = 'Divide by 0 error';
                reset();
                break;
            } 
            answer = (+storedNum / +displayNum).toString();
            if (answer > 9999999999999999 || answer < -999999999999999) {
                display.innerText = 'Overflow';
                reset();
                break;
                }
            if (answer.length > 16) {
                answer = answer.slice(0,16);
                }
            display.innerText = addComma(answer);
            reset();
            storedNum = answer;
            break;

        default:
            display.innerText = 'oops';
    }
}

// function for entering operand
const addOperator = function(op) {
    if (operation && storedNum && displayNum) {
        operate();
        operation = op;
        // storedNum and displayNum set to correct values by operate
    }
    if (operation) {
        return; // don't double up operator
    }
    operation = op;
    if (!storedNum) {
    storedNum = displayNum;
    }
    displayNum = undefined; // clear the register but not the display
}

// entry function for responding to buttons
const buttonResponse = function(e) {
    let btnType = e.target.className;
    if (btnType === 'btn' || btnType === 'wide') {
        let str1 = e.target.innerText;
        switch (str1) {
            case 'C':
                displayNum = '0';
                storedNum = undefined;
                operation = undefined;
                display.innerText = '0';
                break;
            case 'Backspace':
                if (displayNum === undefined) {
                    break;
                }
                if (display.innerText.length === 1) {
                    display.innerText = '0';
                    displayNum = display.innerText;
                    break;
                }
                // have to remove commas for this to work
                let noCommas = display.innerText.replaceAll(',','');
                displayNum = noCommas.slice(0,-1);
                display.innerText = addComma(displayNum);
                break;
            case '/':
                addOperator(str1);
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
                addOperator(str1);
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
                addOperator(str1);
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
                addOperator(str1);
                break;
            case '0':
                addNum(str1);
                break;
            case '.':
                addNum(str1);
                break;
            case '=':
                operate();
                break;
            
            default:
                display.innerText = 'other';
        }
    }
}
buttons.forEach(button => addEventListener('click', buttonResponse));