'use strict';

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('7 february 2022 22:06:00');
menu();
modal();
validation();
tabs();
slider();
calc(100);
sendForm({ 
    formId: 'form1',
    someElem: [
        {
            type: "block",
            id: "total"
        }
    ] });
sendForm({ 
    formId: 'form2',
    someElem: [
        {
            type: "block",
            id: "total"
        }
    ] });
sendForm({ 
    formId: 'form3',
    someElem: [
        {
            type: "block",
            id: "total"
        }
    ] });
