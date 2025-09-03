// Установка целевой даты и времени (6 сентября, 17:00, Екатеринбург)
const targetDate = new Date();
targetDate.setFullYear(2025, 8, 6); // Год, месяц (с 0), день
targetDate.setHours(17, 0, 0, 0); // Часы, минуты, секунды, миллисекунды

// Установка часового пояса (Екатеринбург, UTC+5)
const targetTimezoneOffset = 5 * 60; // 5 часов в минутах

// Функция для обновления таймера
function updateCountdown() {
    const now = new Date();
    
    // Получаем текущее время в Екатеринбурге
    const nowUTC = now.getTime() + (now.getTimezoneOffset() * 60000);
    const nowEkaterinburg = nowUTC + (targetTimezoneOffset * 60000);
    const nowEkaterinburgDate = new Date(nowEkaterinburg);

    const distance = targetDate.getTime() - nowEkaterinburgDate.getTime();

    // Если отсчет закончился
    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<h1>Время вышло!</h1>";
        clearInterval(x);
        return;
    }

    // Расчет времени
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновление HTML-элементов
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
}

// Обновление таймера каждую секунду
const x = setInterval(updateCountdown, 1000);

// Первый вызов функции, чтобы избежать задержки
updateCountdown();