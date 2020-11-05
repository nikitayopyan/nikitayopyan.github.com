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

export default calculator;