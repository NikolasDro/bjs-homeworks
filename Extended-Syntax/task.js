"use strict";
function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
  let d = (b ** 2 - 4 * a * c);
  let D = Math.abs(d);
  let x1 = ((- b + Math.sqrt(D)) / (2 * a));
  let x2 = ((- b - Math.sqrt(D)) / (2 * a));
  let x = [x1, x2];
  if (d < 0) {
    return "Корней нет";
    } else if (d === 0) {
    return x[0];
    } else if (d > 0) {
    return x;
  }
    //return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
    // Текущий год
    let year = new Date();
    let age = (((year.getDate() - dateOfBirthday.getDate()) + (30 * (year.getMonth() - dateOfBirthday.getMonth())) + (365 * (year.getFullYear() - dateOfBirthday.getFullYear()))) / 365);

    if (age < 18) {
      return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }else if(age => 18) {
      return `Не желаете ли олд-фэшн, ${name}?`;
    }
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let total = 0;
    let max;
    
  if (marks.length >= 5) {
    max = " - Среднее из пяти первых оценок";
    marks.length = 5;
  }else{
    max = "";
  }


  for (let i = 0; i < marks.length; i++) {
    total += marks [ i ]/ marks.length;
  }
  
  return total + max;
  
    // 3, 4, 4, 5, 3, 5
}
