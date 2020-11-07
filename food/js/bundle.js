/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculator(){
    // СALCULATOR
    const result = document.querySelector('.calculating__result span');

    let height, weight, age;
    let sex;
    let ratio;
    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex', 'female');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }
    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio', 1.375);
    } else {
        ratio = 'female';
        localStorage.setItem('ratio', 1.375);
    }
    
    function localStorageCalc(selector, active, item, attribute){
        let element = document.querySelectorAll(selector);

        element.forEach(elem => {
            elem.classList.remove(active);
            if(localStorage.getItem(item) === elem.getAttribute(attribute)){
                elem.classList.add(active);
            } 
        });
    }
    localStorageCalc('#gender div', 'calculating__choose-item_active', 'sex', 'id');
    localStorageCalc('.calculating__choose_big div', 'calculating__choose-item_active', 'ratio', 'data-ratio');

    function calculateResult(){
        if (!sex || !height || !weight || !age || !ratio){
            result.textContent = '____';
            return;
        }

        if(sex == 'female'){
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calculateResult();
    function calcStaticInfo(selector, active){
        let element = document.querySelectorAll(selector);

        element.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if(e.target.getAttribute('data-ratio')){
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }
                element.forEach(elem => {
                    elem.classList.remove(active);
                });
                e.target.classList.add(active);

                
                calculateResult();
            });
        });
    }
    calcStaticInfo('#gender div', 'calculating__choose-item_active');
    calcStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcInput(id){
        let input = document.querySelector(id);

        input.addEventListener('input', () => {
            if(input.value.match(/\D/g)){
                input.style.background = 'red';
            } else {
                input.style.background = '';
            }

            switch(input.getAttribute('id')){
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age": 
                    age = +input.value;
                    break;
            }
            calculateResult();
        });    
    }
    calcInput('#height');
    calcInput('#weight');
    calcInput('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cards(){
    // CARDS
    class CardTemplate {
        constructor(img, altimg, title, descr, price, parent, ...classes){
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.classes = classes;
            this.price = price * 27;
            this.parent = document.querySelector(parent);
        }
        createNewCard(){
            const element = document.createElement('div');

            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                <img src="${this.img}" alt="${this.altimg}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);

        }
    }

    Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getData"])('http://localhost:3000/menu')
    .then(object => {
        object.forEach(({src, altimg, title, descr, price}) => {
            new CardTemplate(src, altimg, title, descr, price, '.menu .container').createNewCard();
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/formsender.js":
/*!**********************************!*\
  !*** ./js/modules/formsender.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function formSender(modalTimer){
    const forms = document.querySelectorAll('form');
    
    const clientMassege = {
        success: 'Спасибо! До новых встреч',
        fail: 'Что-то пошло не так :(',
        loading: 'img/form/spinner.svg'
    };

    forms.forEach(item => {
        sendData(item);
    });

    function sendData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            const spinnerLoading = document.createElement('img');
            spinnerLoading.src = clientMassege.loading;
            spinnerLoading.style.cssText = 'display: block; margin: 0 auto';
            form.insertAdjacentElement('afterend', spinnerLoading);

            Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                changeModal(clientMassege.success);
                spinnerLoading.remove();
            }).catch(() => {
                changeModal(clientMassege.fail);
            }).finally(() => {
                form.reset();
            });
        });
    }
    function changeModal(message) {
        const prevModal = document.querySelector('.modal__dialog');
        prevModal.classList.add('hide');
        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalOpen"])('.modal', modalTimer);
        const responseModal = document.createElement('div');
        responseModal.classList.add('modal__dialog');
        responseModal.innerHTML = `
            <div class="modal__content">
                <div data-closed class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(responseModal);
        setTimeout(() => {
            responseModal.remove();
            prevModal.classList.remove('hide');
            prevModal.classList.add('show');
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal',);
        }, 2000);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (formSender);

/***/ }),

/***/ "./js/modules/hamburger.js":
/*!*********************************!*\
  !*** ./js/modules/hamburger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function hamburger() {
    const burger = document.querySelector('.hamburger'),
          panel = document.querySelector('nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('hamburger-active');
        panel.classList.toggle('header__links-active');
    });
}

/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: closeModal, modalOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOpen", function() { return modalOpen; });
function closeModal(modalWindow){
    const modal = document.querySelector(modalWindow);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
function modalOpen(modalWindow, modalTimer){
    const modal = document.querySelector(modalWindow);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (modalWindow){
        clearInterval(modalTimer);  
        console.log(modalTimer);
    }
}


function modal(modalWindow, triggerModal, modalTimer){
    const modalTrigger = document.querySelectorAll(triggerModal),
          modal = document.querySelector(modalWindow);


    modalTrigger.forEach(i => {
        i.addEventListener('click', () => modalOpen(modalWindow, modalTimer));
    });

    modal.addEventListener('click', (e) => {          // закрываем модальное окно по области ВНЕ самого окна
        if (e.target === modal || e.target.getAttribute('data-closed') == ''){
            closeModal(modalWindow);
        }
    });

    document.addEventListener('keydown', event =>{    // закрываем окно клавишей Esc
        if (event.code == 'Escape'){
            closeModal(modalWindow);
        }
    });

    function showModalByScroll(){
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            modalOpen(modalWindow, modalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_getzero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getzero */ "./js/services/getzero.js");

function slider({counter, container, prev, next, slide, wrapper, field}){

    const currentSlide = document.querySelector(counter),
          slider = document.querySelector(container),
          prevSlideBtn = document.querySelector(prev),
          nextSlideBtn = document.querySelector(next),
          sliderImage = document.querySelectorAll(slide),
          sliderWrapper = document.querySelector(wrapper),
          sliderField = document.querySelector(field),
          width = window.getComputedStyle(sliderWrapper).width,
          dots = [];

    let index = 1;
    let offset = 0;

    function dotOpacity(){
        dots.forEach(dot => {
            dot.style.opacity = 0.5;
        });
        dots[index - 1].style.opacity = 1;   
    }

    let indicators = document.createElement('ul');
    slider.style.position = 'relative';
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for(let i = 0; i < sliderImage.length; i++){
        let dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        indicators.append(dot);
        if (i == 0){
            dot.style.opacity = 1;
        }
        dots.push(dot);
    }

    if(sliderImage.length < 10){
        currentSlide.textContent = Object(_services_getzero__WEBPACK_IMPORTED_MODULE_0__["default"])(index);
    } else {
        currentSlide.textContent = index;
    }   

    sliderField.style.width = 100 * sliderImage.length + '%';
    sliderImage.forEach(slide => {
        slide.style.width = width;
    });
    sliderField.style.display = 'flex';
    sliderField.style.transition = '0.5s all';
    sliderWrapper.style.overflow = 'hidden';

    function noStrAllowed(str){
        return +str.replace(/\D/g, '');
    }
    
    nextSlideBtn.addEventListener('click', () => {
        if (offset === noStrAllowed(width) * (sliderImage.length - 1)){
            offset = 0;
        } else {
            offset += noStrAllowed(width);
        }
        sliderField.style.transform = `translateX(-${offset}px)`;
        if (index == sliderImage.length){
            index = 1;
        } else {
            index++;
        }
        currentSlide.textContent = Object(_services_getzero__WEBPACK_IMPORTED_MODULE_0__["default"])(index);
        dotOpacity();
    });
    prevSlideBtn.addEventListener('click', () => {
        if (offset == 0){
            offset = noStrAllowed(width) * (sliderImage.length - 1);
        } else {
            offset -= noStrAllowed(width);
        }
        sliderField.style.transform = `translateX(-${offset}px)`;
        if (index == 1){
            index = sliderImage.length;
        } else {
            index--;
        }
        currentSlide.textContent = Object(_services_getzero__WEBPACK_IMPORTED_MODULE_0__["default"])(index);
        dotOpacity();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            index = slideTo;
            offset = noStrAllowed(width) * (slideTo - 1);
            sliderField.style.transform = `translateX(-${offset}px)`;
            dotOpacity();
            currentSlide.textContent = Object(_services_getzero__WEBPACK_IMPORTED_MODULE_0__["default"])(index);
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabParentSelector, contentSelector, active){

    const tabs = document.querySelectorAll(tabsSelector),
          tabParent = document.querySelector(tabParentSelector),
          content = document.querySelectorAll(contentSelector);
    
    function hideContent(){
        content.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        });
        tabs.forEach(tab => {
            tab.classList.remove(active);
        });
    }

    hideContent();
    showContent(0);

    function showContent(i){
        tabs[i].classList.add(active);
        content[i].classList.remove('hide');
        content[i].classList.add('show');
    }
   
    tabParent.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((tab, i) => {
                if(tab == event.target){
                    hideContent();
                    showContent(i);
                }
            });
        }
    }); 
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_getzero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getzero */ "./js/services/getzero.js");

function timer(deadlineDate){
        //TIMER
        const deadline = deadlineDate;

        function remainingTime(endtime){
            let t = Date.parse(endtime) - Date.parse(new Date()), //получаем разницу во времени в миллисекундах 
                days = Math.floor(t / (1000 * 60 * 60 * 24)), // в днях
                hours = Math.floor(t / (1000 * 60 * 60) % 24), // в часах 
                minutes = Math.floor((t / 1000 / 60) % 60), // минутах 
                seconds = Math.floor((t / 1000) % 60); // секундах
    
            return {           //возвращаем все переменные в объект, который в дальнейшей функции можем использовать
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
    
        function setClock(selector, endtime){               
            const timer = document.querySelector(selector),         //обращаемся к элементам вёрстки 
                days = document.querySelector('#days'),
                hours = document.querySelector('#hours'),
                minutes = document.querySelector('#minutes'),
                seconds = document.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);    //задаём интервал в 1 секунду, чтобы он обновлялся каждую секунду, в обратном отсчёте
    
            function updateClock(){
                const t = remainingTime(endtime);       // задаём переменную t, в которой лежит 1ая функция, чтобы обратиться к свойствам объекта return
    
                days.innerHTML = Object(_services_getzero__WEBPACK_IMPORTED_MODULE_0__["default"])(t.days);       //кладём в элементы вёрстки содержимое первой функции
                hours.innerHTML = Object(_services_getzero__WEBPACK_IMPORTED_MODULE_0__["default"])(t.hours);
                minutes.innerHTML = Object(_services_getzero__WEBPACK_IMPORTED_MODULE_0__["default"])(t.minutes);
                seconds.innerHTML = Object(_services_getzero__WEBPACK_IMPORTED_MODULE_0__["default"])(t.seconds);
    
                if(t.total <= 0){
                    clearInterval(timeInterval);        // при завершении обратного отсчёта таймер закончится
                }
            }
        }
        setClock('.timer', deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_formsender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/formsender */ "./js/modules/formsender.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/hamburger */ "./js/modules/hamburger.js");












window.addEventListener('DOMContentLoaded', () => {

    const modalTimer = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["modalOpen"])('.modal', modalTimer), 5000);

    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active');
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.modal', '[data-modal]', modalTimer);
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_formsender__WEBPACK_IMPORTED_MODULE_3__["default"])(modalTimer);
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        counter: '#current',
        container: '.offer__slider',
        prev: '.offer__slider-prev',
        next: '.offer__slider-next',
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('2021-05-20'); 
    Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_7__["default"])();
}); 



/***/ }),

/***/ "./js/services/getzero.js":
/*!********************************!*\
  !*** ./js/services/getzero.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getZero(num){             //добавляем 0 в числа меньше 10ти
    if (num >= 0 && num < 10){
        return `0${num}`;
    } else {
        return num;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (getZero);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
const postData = async function (url, data) {
    let result = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await result.json();
}

async function getData(url) {
    let result = await fetch(url);

    if(!result.ok) {
        throw new Error(`Эта ссылка ${url} не работает, ${result.status}`)
    }

    return await result.json();
}




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map