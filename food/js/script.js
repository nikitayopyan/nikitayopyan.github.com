'use strict';

import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import formSender from './modules/formsender';
import calculator from './modules/calculator';
import slider from './modules/slider';
import timer from './modules/timer';
import hamburger from './modules/hamburger';
import {modalOpen} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimer = setTimeout(() => modalOpen('.modal', modalTimer), 5000);

    tabs('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active');
    modal('.modal', '[data-modal]', modalTimer);
    cards();
    formSender(modalTimer);
    slider({
        counter: '#current',
        container: '.offer__slider',
        prev: '.offer__slider-prev',
        next: '.offer__slider-next',
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calculator();
    timer('2021-05-20'); 
    hamburger();
}); 

