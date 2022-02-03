const sendForm = ({ formId, someElem= [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка ...';
    const errorText = 'Ошибка ...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!';

    const validate = (list) => {
        let success = true;

        list.forEach((item) => {
            if (item.classList.contains('form-email')) {
                if (!item.value.match(/.+@.+\..+/gi)) {
                    success = false;
                    return false;
                }
            } else if (item.classList.contains('form-phone')) {
                if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
                    success = false;
                    return false;
                }
            } else if (item.classList.contains('form-name') || item.classList.contains('top-form')) {
                if (!item.value.match(/^[а-яА-Я][а-яА-Я- ]+[а-яА-Я]?$/g)) {
                    success = false;
                    return false;
                }
            } else if (item.classList.contains('mess')) {
                if (item.value.match(/[a-zA-Z'][a-zA-Z']+[a-zA-Z']?$/gi)) {
                    success = false;
                    console.log(item);
                    return false;
                }
            }

        });

        return success;
    };

    const sendData = (data) => {
        return fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }

        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        statusBlock.style.textShadow = '0 0 5px #feb019';
        statusBlock.style.color = '#fff';
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => { //вытаскиваем значение total
            const element = document.getElementById(elem.id);

            console.log(element);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        console.log('submit');
        
        if (validate(formElements)) {

            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText;
                statusBlock.style.textShadow = '0 0 5px #19b5fe';
                statusBlock.style.color = '#fff';
                formElements.forEach(input => {
                    input.value = '';
                });
                console.log(data);
            })
            .catch(error => {
                statusBlock.textContent = errorText;    
                statusBlock.style.textShadow = '0 0 5px #fe1919';
                statusBlock.style.color = '#fff';   
            });  
        } else {
            alert("Данные не валидны!!!");
            statusBlock.textContent = errorText;
            statusBlock.style.textShadow = '0 0 5px #fe1919';
            statusBlock.style.color = '#fff';   
        }
    };

    try {
        if (!form) {
            throw new Error ('Верните форму на место!');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;