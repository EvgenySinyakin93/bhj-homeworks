// const timer = document.getElementById("timer");

let timer; // переменная для setTimeout
let startTimer = 59; //старт значение

function reportTimer(){ //функция обратного отчета
    document.getElementById("timer").innerHTML = startTimer; //переделываем вид HTML-cтр
    startTimer--; //уменьшаем на секунду(единицу)

    if (startTimer < 0) {
        clearTimeout(timer); //таймер остановится на 0..по крайней мере должен :)
        alert("Вы победили в конкурсе!"); //сообщение после остановки
    } else {
        timer = setTimeout(reportTimer, 1000); //отчет времени посекундно 
    }
}

reportTimer();