"use strict";

function setDailyRhythm(wakeUpTime, bedTime){
    checkTimeMorning(wakeUpTime);
    checkTimeNight(bedTime);
};

const morning = () => alert('Доброе утро, Вася!');
const night = () => alert('Спокойной ночи, Вася!');

const checkTimeMorning = setAlarm('07:00', morning);
const checkTimeNight = setAlarm('23:00', night);



function setAlarm(time, callback){
    function result(sistemTime) {
        const timeNow = new Date();
        const hours = timeNow.getHours();
        const minutes = timeNow.getMinutes();
        
        if (minutes < 10) {
            sistemTime = `${hours}:0${minutes}`;
        }else{
            sistemTime = `${hours}:${minutes}`;
        };

        if (sistemTime === time) {
            callback();
        }
        console.log(sistemTime);
    }
    return result;
}

setInterval(setDailyRhythm, 1000);





//const checkTimeMorning = setAlarm('11:35', morning);
//const checkTimeNight = setAlarm('23:00', night);

//console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);

