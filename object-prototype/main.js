"use strict";
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now = Date.now();

    let date = new Date(birthday);
    let diff = now - date;
    let age = diff / 31557600000;
    console.log(age)

    if (age >= 18) {
      return true;
    }else{
      return false;
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
  let sound = animal.sound;
  if (sound === undefined) {
    return null;
  }else{
    return sound;
  }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
// код для задачи №3 писать здесь
    let total = 0;
    
    for (let i = 0; i < marks.length; i++) {
        total += parseInt(marks[i]);
    }

    let average = total /  marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
    
}