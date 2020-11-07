import getZero from '../services/getzero';
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
        currentSlide.textContent = getZero(index);
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
        currentSlide.textContent = getZero(index);
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
        currentSlide.textContent = getZero(index);
        dotOpacity();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            index = slideTo;
            offset = noStrAllowed(width) * (slideTo - 1);
            sliderField.style.transform = `translateX(-${offset}px)`;
            dotOpacity();
            currentSlide.textContent = getZero(index);
        });
    });
}

export default slider;