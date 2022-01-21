const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    let animationOutNum = (num, elem) => {
        let i = document.getElementById(elem);
        let n = 0;
        if (n > 0) {
            n = n;
        }
        let interval = setInterval(() => {
            n = n + (num / 10);
            //console.log('Считаю');
            if (n == num) {
                clearInterval(interval);
                //console.log('Stop');
            } else if (n > num) {
                clearInterval(interval);
                //console.log('Stop');
            }
            i.innerHTML = n;
        }, 50);
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        //указываем значение выбранного раздела
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10; //прибавляем К calcCountValue 10%;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }
        total.textContent = totalValue;

        animationOutNum(totalValue, 'total');
    };

    calcBlock.addEventListener('input', (e) => {
        //countCalc();
        //console.log(e.target);
        if (e.target === calcType || e.target === calcSquare 
            || e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    });
};

export default calc;