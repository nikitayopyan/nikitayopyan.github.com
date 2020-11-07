import getZero from '../services/getzero';
function timer(deadlineDate){
        //TIMER
        const deadline = deadlineDate;

        function remainingTime(endtime){
            let t = Date.parse(endtime) - Date.parse(new Date()), //получаем разницу во времени в миллисекундах 
                days = Math.floor(t / (1000 * 60 * 60 * 24)), // в днях
                hours = Math.floor(t / (1000 * 60 * 60) % 24), // в часах 
                minutes = Math.floor((t / 1000 / 60) % 60), // минутах 
                seconds = Math.floor((t / 1000) % 60); // секундах
    
            return {           //возвращаем все переменные в объект, который в дальнейшей функции можем использовать
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
    
        function setClock(selector, endtime){               
            const timer = document.querySelector(selector),         //обращаемся к элементам вёрстки 
                days = document.querySelector('#days'),
                hours = document.querySelector('#hours'),
                minutes = document.querySelector('#minutes'),
                seconds = document.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);    //задаём интервал в 1 секунду, чтобы он обновлялся каждую секунду, в обратном отсчёте
    
            function updateClock(){
                const t = remainingTime(endtime);       // задаём переменную t, в которой лежит 1ая функция, чтобы обратиться к свойствам объекта return
    
                days.innerHTML = getZero(t.days);       //кладём в элементы вёрстки содержимое первой функции
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
    
                if(t.total <= 0){
                    clearInterval(timeInterval);        // при завершении обратного отсчёта таймер закончится
                }
            }
        }
        setClock('.timer', deadline);
}

export default timer;