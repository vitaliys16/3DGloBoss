const timer = (deadline) => {
    console.log(deadline);
    //timer-hours
    const timerHours = document.getElementById('timer-hours');
    //timer-minutes
    const timerMinutes = document.getElementById('timer-minutes');
    //timer-seconds
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date (deadline).getTime();
        let dateNow = new Date ().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor((timeRemaining / 60 / 60));
        let minutes = Math.floor((timeRemaining / 60) % 60); //%60 - вычитаем все возможные минуты
        let seconds = Math.floor(timeRemaining % 60); //%60 - остаток от деления (вычитаем все возможные секунды)

        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        if (getTime.timeRemaining === 0 || getTime.timeRemaining < 0) {
            console.log('Время вышло'); 
        } else {
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;

            timerHours.innerHTML = ("0" + getTime.hours).slice(-2);
            timerMinutes.innerHTML = ("0" + getTime.minutes).slice(-2);
            timerSeconds.innerHTML = ("0" + getTime.seconds).slice(-2);
        }
    };
    updateClock();

    let timeRemaining = setInterval(() => {
        let getTime = getTimeRemaining();
        if (getTime.timeRemaining === 0 || getTime.timeRemaining < 0) {
            console.log('Время вышло'); 
            clearInterval(timeRemaining);
        } else {
            updateClock();
        }
    }, 1000);
};

export default timer;