function hamburger() {
    const burger = document.querySelector('.hamburger'),
          panel = document.querySelector('nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('hamburger-active');
        panel.classList.toggle('header__links-active');
    });
}

export default hamburger;