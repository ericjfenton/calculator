let str1 = "5.20100000";
let index = str1.length -1;
if (str1.includes('.') && str1[index] === '0') {
let pad = "";
console.log(str1[index]);
while (str1[index] === '0') {
    pad += '0';
    index--;
}
let num1 = +str1;
let answer1 = num1.toLocaleString();
let answer2 = answer1 + pad;
console.log(answer1);
console.log(answer2);
}
//console.log(str1[index]);