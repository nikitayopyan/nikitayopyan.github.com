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
    const getResources = async (url) => {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`${url} is not found, server status: ${res.status}`);
        }

        return await res.json();
    };

    getResources('http://localhost:3000/menu')
    .then(object => {
        object.forEach(({src, altimg, title, descr, price}) => {
            new CardTemplate(src, altimg, title, descr, price, '.menu .container').createNewCard();
        });
    });
}

export default cards;