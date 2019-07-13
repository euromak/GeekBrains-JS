'use strict';

const catalog = {
    catalogData: [
        {
            name: 'Свитшот',
            article: '1',
            price: 5000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_1.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_1.jpg',
        },
        {
            name: 'Пальто',
            article: '2',
            price: 9000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_2.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_2.jpg',
        },
        {
            name: 'Куртка',
            article: '3',
            price: 7500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_3.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_3.jpg',
        },
        {
            name: 'Поло',
            article: '4',
            price: 4000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_4.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_4.jpg',
        },
        {
            name: 'Свитшот',
            article: '5',
            price: 5000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_5.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_5.jpg',
        },
        {
            name: 'Куртка',
            article: '6',
            price: 5500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_6.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_6.jpg',
        },
        {
            name: 'Костюм',
            article: '7',
            price: 9000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_7.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_7.jpg',
        },
        {
            name: 'Куртка',
            article: '8',
            price: 10000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_8.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_8.jpg',
        },
        {
            name: 'Поло',
            article: '9',
            price: 2500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_9.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_9.jpg',
        },

    ],

    init () {
        this.buildGrid();
    },

    buildGrid() {
        // создаем контейнер
        const container = document.createElement('div');
        container.id = 'catalog';
        document.body.insertBefore(container, document.body.children[0]);

        // создаем и выводим блоки с продуктами в контейнер
        for (let i = 0; i < this.catalogData.length; i++) {
            const product = document.createElement('div');
            product.classList.add('product');

            const image = document.createElement('img');
            image.src = this.catalogData[i].image;
            image.dataset.imageBig = this.catalogData[i].imageBig;
            product.appendChild(image);

            const productInfo = document.createElement('div');
            productInfo.classList.add('description');
            product.appendChild(productInfo);

            const productDescription = document.createElement('div');
            productInfo.appendChild(productDescription);

            const name = document.createElement('div');
            name.textContent = this.catalogData[i].name;
            productDescription.appendChild(name);

            const price = document.createElement('div');
            price.textContent = `${this.catalogData[i].price} руб.`;
            productDescription.appendChild(price);


            const button = document.createElement('button');
            button.classList.add('order');
            button.dataset.article = this.catalogData[i].article;
            button.textContent = 'ЗАКАЗАТЬ';
            productInfo.appendChild(button);

            container.appendChild(product);
        }
    },
};

const cart = {
    basket: [],
    totalPrice: 0,
    totalQuantity: 0,

    init() {
        const container = document.querySelector('#catalog');
        container.addEventListener('click', () => this.addProductToBasket(event));

        this.buildCart();
    },

    buildCart() {
        // создаем блок корзины и добавляем его перед скриптами
        const cart = document.createElement('div');
        cart.id = 'cart';
        document.body.insertBefore(cart, document.body.children[1]);

        // создаем блоки для названия корзины и кнопки очистить корзину
        const cartTopBlock = document.createElement('div');
        cartTopBlock.classList.add('cart__top-block');
        cartTopBlock.textContent = 'КОРЗИНА';
        cart.appendChild(cartTopBlock);

        // создаем блок для вывода товаров, положенных в корзину
        const cartMiddleBlock = document.createElement('div');
        cartMiddleBlock.classList.add('cart__middle-block');
        cart.appendChild(cartMiddleBlock);

        // создаем блок для вывода количества и стоимости корзины
        const cartBottomBlock = document.createElement('div');
        cartBottomBlock.classList.add('cart__bottom-block');
        cart.appendChild(cartBottomBlock);

        const totalQuantity = document.createElement('div');
        totalQuantity.classList.add('total-quantity');
        totalQuantity.textContent = `КОЛ-ВО: ${this.totalQuantity} шт.`;
        cartBottomBlock.appendChild(totalQuantity);

        const totalPrice = document.createElement('div');
        totalPrice.classList.add('total-price');
        totalPrice.textContent = `ИТОГО: ${this.totalQuantity} руб.`;
        cartBottomBlock.appendChild(totalPrice);
    },

    addProductToBasket(event) {
        if (event.target.className === 'order') {

            // ищем в базе товар с соответствующим dataset у элемента id(в нашем случае св-во article)
            for (let i = 0; i < catalog.catalogData.length; i++) {
                if (event.target.dataset.article === catalog.catalogData[i].article) {

                    // добавляем товар в корзину cart.basket
                    cart.basket.push(catalog.catalogData[i]);

                    // добавляем стоимость товара в корзину
                    cart.totalPrice += catalog.catalogData[i].price;

                    // добавляем кол-во товаров в корзину
                    cart.totalQuantity++;

                    alert(`Товар: ${catalog.catalogData[i].name} добавлен в корзину`);
                }
            }
            console.log(cart.basket, cart.totalPrice, cart.totalQuantity);
        }

    },

    deleteProductFromBasket() {},

};

window.addEventListener('load', () => catalog.init());
window.addEventListener('load', () => cart.init());
