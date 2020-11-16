'use strict';

$(document).ready(function(){
    $('.header__slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next.png" alt="next"></img></button>',
    });
});

function changeNavByScroll() {
    if (window.pageYOffset > 400) {
        document.querySelector('.navbar').classList.add('navbar-active');
    } else {
        document.querySelector('.navbar').classList.remove('navbar-active');
    }
}

window.addEventListener('scroll', changeNavByScroll);

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('hamburger-active');
    document.querySelector('.navbar__info').classList.toggle('navbar__info-active');
})


                                    