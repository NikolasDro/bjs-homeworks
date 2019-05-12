"use strict";
//задача 1
function getSolutions( a, b, c ) {
  let D = (b ** 2 - 4 * a * c);
  
  if (D < 0) {
    return {
      D
    }
  }else if (D == 0){
    let x1 = (- b / (2 * a));
    return { 
      roots: [x1], 
      D
    }
  }else if (D > 0){
    let x1 = ((- b + Math.sqrt(D)) / (2 * a));
    let x2 = ((- b - Math.sqrt(D)) / (2 * a));
    return { 
      roots: [x1, x2], 
      D
    }
  } 
}

getSolutions( 2, 4, 1 );


function showSolutionsMessage( a, b, c ) {
  let result = getSolutions( a, b, c );
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  }else if (result.D == 0){
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  }else if (result.D > 0){
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage( 1, 2, 3 );
showSolutionsMessage( 7, 20, -3 );
showSolutionsMessage( 2, 4, 2 );

//задача 2
function getAverageScore(data) {
  let allAverage = 0; 
  let objectLength = 0;
  
  let arrAverage = data;
  for (let prop in arrAverage) {
    arrAverage[prop] = averageScore(arrAverage[prop]); 
    allAverage += arrAverage[prop];
    objectLength++;
    arrAverage.average = allAverage / objectLength;
  }
  return arrAverage;
}

function averageScore(n) {
  let total = 0;
  for (let i = 0; n.length > i; i++) {
    total += n[i];
  }
  return total / n.length;
}

console.log( getAverageScore({
  algebra: [ 2, 4, 5, 2, 3, 4 ],
  geometry: [ 2, 4, 5 ],
  russian: [ 3, 3, 4, 5 ],
  physics: [ 5, 5 ],
  music: [ 2, 2, 6 ],
  english: [ 4, 4, 3 ],
  poetry: [ 5, 3, 4 ],
  chemistry: [ 2 ],
  french: [ 4, 4 ]
}));