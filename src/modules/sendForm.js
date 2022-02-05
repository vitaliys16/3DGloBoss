const sendForm = ({ formId, someElem= [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка ...';
    const errorText = 'Ошибка ...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!';
    const nameText = 'В имени должно быть не менее 2 букв';

    const validate = (list) => {
        let success = true;

        const redBorder = (e) => {
            e.style.boxShadow = "0 0 2px 3px #ff2f0e";    
        };
        const deleteRedBorder = (e) => {
            e.style.boxShadow = null; 
        };

        list.forEach((item) => {
            if (item.classList.contains('form-email')) {
                if (!item.value.match(/.+@.+\..+/gi)) {
                    redBorder(item);
                    success = false;
                    return false;
                } else {
                    deleteRedBorder(item);
                }
            } else if (item.classList.contains('form-phone')) {
                if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
                    redBorder(item);
                    success = false;
                    return false;
                } else {
                    deleteRedBorder(item);
                }
            } else if (item.classList.contains('form-name') || item.classList.contains('top-form')) {
                if (!item.value.match(/^[а-яА-Я][а-яА-Я- ]+[а-яА-Я]?$/g)) {
                    redBorder(item);
                    success = false;
                    return false;
                } else {
                    deleteRedBorder(item);
                }
            } else if (item.classList.contains('mess')) {
                if (item.value.match(/[a-zA-Z'][a-zA-Z']+[a-zA-Z']?$/gi)) {
                    redBorder(item);
                    success = false;
                    return false;
                } else {
                    deleteRedBorder(item);
                }
            } else if (item.classList.contains('form-name') || item.getElementById('form2-name')) {
                if (item.value.length < 2 ) {
                    redBorder(item);
                    success = false;
                    return false;
                } else {
                    deleteRedBorder(item);
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

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });
        
        if (validate(formElements)) {

            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText;
                statusBlock.style.textShadow = '0 0 5px #19b5fe';
                statusBlock.style.color = '#fff';
                formElements.forEach(input => {
                    input.value = '';
                });
                setTimeout(() => {
                    form.removeChild(statusBlock);
                }, 4000);

            })
            .catch(error => {
                statusBlock.textContent = errorText;    
                statusBlock.style.textShadow = '0 0 5px #fe1919';
                statusBlock.style.color = '#fff'; 
                setTimeout(() => {
                    form.removeChild(statusBlock);
                }, 4000);  
            });  
        } else {
            statusBlock.textContent = errorText;
            statusBlock.style.textShadow = '0 0 5px #fe1919';
            statusBlock.style.color = '#fff'; 
            
            setTimeout(() => {
                    form.removeChild(statusBlock);
                }, 4000);
        }
    };

    try {
        if (!form) {
            throw new Error ('Верните форму на место!');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formElements = form.querySelectorAll('input');
                if(validate(formElements)) {
                    submitForm();

                    const modal = document.querySelector('.popup');
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 5000);
                }
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;