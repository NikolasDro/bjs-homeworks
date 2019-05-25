"use strict";

function setDailyRhythm(wakeUpTime, bedTime){
    const morning = () => alert('Доброе утро, Вася!');
    const night = () => alert('Спокойной ночи, Вася!');

    const checkTimeMorning = setAlarm(wakeUpTime, morning);
    const checkTimeNight = setAlarm(bedTime, night);

    setInterval(checkTimeMorning, 1000);
    setInterval(checkTimeNight, 1000);
}

function setAlarm(time, callback){
    function result() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        

        if (hours < 10){
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        
        let sistemTime = String(`${hours}:${minutes}`)

        if (sistemTime === time) {
           return callback();
        }
        console.log(sistemTime);
    }
    return result;
}


setDailyRhythm('08:45','23:00');