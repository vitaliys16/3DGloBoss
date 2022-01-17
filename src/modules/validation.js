const validation = () => {
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
    };
    let validEmail = function(e) {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/, "");   
    };
    let validPhone = function(e) {
        e.target.value = e.target.value.replace(/[^0-9()-]/, "");   
    };

    calcSquare.addEventListener('input', validNumber);
    calcCount.addEventListener('input', validNumber);
    calcDay.addEventListener('input', validNumber);

    formNameMain.addEventListener('input', validCyrillic);
    formNameFooter.addEventListener('input', validCyrillic);
    formNameModal.addEventListener('input', validCyrillic);
    formMessage.addEventListener('input', validCyrillic);

    allEmailInput.forEach(input => {
        input.addEventListener('input', validEmail);
    });

    allPhoneInput.forEach(input => {
        input.addEventListener('input', validPhone);
    });
};

export default validation;
