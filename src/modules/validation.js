const validation = () => {
    const statusBlock = document.createElement('div');


    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');

    const formNameMain = document.querySelector('#form1-name');
    const formNameFooter = document.querySelector('#form2-name');
    const formNameModal = document.querySelector('#form3-name');

    const formMessage = document.querySelector('[placeholder="Ваше сообщение"]');

    let allEmailInput = document.querySelectorAll('[type="email"]');
    let allPhoneInput = document.querySelectorAll('[type="tel"]');

    let validNumber = function (e) {
        e.target.value = e.target.value.replace(/\D+/, "");    
    };
    let validCyrillic = function (e) {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s\-]/,"");
        if (e.target.value.length < 2) {
                const form = e.target;
                statusBlock.textContent = 'Введите более 2 символов';
                statusBlock.style.textShadow = 'rgb(254 176 25) 0px 0px 5px';
                statusBlock.style.color = '#fff';
                statusBlock.style.fontSize = '14px';
                //statusBlock.style.position = 'absolute';
                //statusBlock.style.left = 0;
                //statusBlock.style.right = 0;
                //statusBlock.style.top = '95%';
                form.after(statusBlock);
        } else {
            statusBlock.remove();    
        };  
    };
    let validEmail = function(e) {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/, "");   
    };
    let validPhone = function(e) {
        e.target.value = e.target.value.replace(/[^0-9()-+]/, "");   
    };

    calcSquare.addEventListener('input', validNumber);
    calcCount.addEventListener('input', validNumber);
    calcDay.addEventListener('input', validNumber);

    formNameMain.addEventListener('input', validCyrillic);
    formNameFooter.addEventListener('input', validCyrillic);
    formNameModal.addEventListener('input', validCyrillic);
    //formMessage.addEventListener('input', validCyrillic);

    allEmailInput.forEach(input => {
        input.addEventListener('input', validEmail);
    });

    allPhoneInput.forEach(input => {
        input.addEventListener('input', validPhone);
    });
};

export default validation;
