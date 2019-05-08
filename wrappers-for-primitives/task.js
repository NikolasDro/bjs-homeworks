"use strict";
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = new Date(window.date.value);

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    function checkData (parameter){
        for (let key in parameter) {         
            if (isNaN(parseInt(parameter[key]))) {
                console.log(`Параметр ${key} содержит неправильное значение ${parameter[key]} `);
                return `Параметр ${key} содержит неправильное значение ${parameter[key]} `;
            }
        } 
    }
    
    checkData ({
        percent: percent,
        contribution: contribution,
        amount: amount
    })
    
    let S = amount - contribution;
    let P = percent / 100 / 12;
    let now = new Date();
    let n = ((date.getMonth() - now.getMonth()) + (12 * (date.getFullYear() - now.getFullYear())));
    let payMonth = S * (P + P / (((1 + P) ** n) - 1));
    
    let totalAmount = payMonth * n;

    console.log( totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
    //return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (typeof name === "string" && name != "") {
        console.log(`Привет, мир! Меня зовут ${name}.`);
        return `Привет, мир! Меня зовут ${name}.`;
      }else{
        console.log(`Привет, мир! Меня зовут Аноним.`);
        return `Привет, мир! Меня зовут Аноним.`;
      }
    //return greeting;
}