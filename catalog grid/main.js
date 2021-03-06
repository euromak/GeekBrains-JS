'use strict';

/**
 *
 * @type {{catalogData: *[], init(): void, buildGrid(): void}}
 */


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
        // подключаем функцию вывода корзины
        this.buildCart();

        // добавляем событие добавления товаров в корзину
        const container = document.querySelector('#catalog');
        container.addEventListener('click', () => this.addProductToBasket(event));

        // добавляем событие очистки корзины
        const cleanButton = document.querySelector('#cleanbasket');
        cleanButton.addEventListener('click', () => this.deleteProductFromBasket(event));
    },

    buildCart() {
        // создаем блок корзины и добавляем его перед скриптами
        let cart = document.createElement('div');
        cart.id = 'cart';
        document.body.insertBefore(cart, document.body.children[1]);

        // создаем блоки для названия корзины и кнопки очистить корзину
        let cartTopBlock = document.createElement('div');
        cartTopBlock.classList.add('cart__top-block');
        cart.appendChild(cartTopBlock);

        // создаем блок для иконки корзины
        const iconCart = document.createElement('div');
        iconCart.innerHTML = '<i class="fa fa-shopping-basket" aria-hidden="true"></i>';
        cartTopBlock.appendChild(iconCart);

        // создаем блок для названия корзины
        const cartName = document.createElement('div');
        cartName.textContent = 'КОРЗИНА';
        cartTopBlock.appendChild(cartName);

        // создаем кнопку очистить корзину
        let cleanCart = document.createElement('div');
        cleanCart.id = 'cleanbasket';
        cleanCart.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        cartTopBlock.appendChild(cleanCart);


        // создаем блок для вывода товаров, положенных в корзину
        let cartMiddleBlock = document.createElement('div');
        cartMiddleBlock.classList.add('cart__middle-block');
        cart.appendChild(cartMiddleBlock);

        // создаем блок для вывода количества и стоимости корзины
        let cartBottomBlock = document.createElement('div');
        cartBottomBlock.classList.add('cart__bottom-block');
        cart.appendChild(cartBottomBlock);

        let totalQuantity = document.createElement('div');
        totalQuantity.classList.add('total-quantity');
        totalQuantity.textContent = `КОЛ-ВО: ${this.totalQuantity} шт.`;
        cartBottomBlock.appendChild(totalQuantity);

        let totalPrice = document.createElement('div');
        totalPrice.classList.add('total-price');
        totalPrice.textContent = `ИТОГО: ${this.totalPrice} руб.`;
        cartBottomBlock.appendChild(totalPrice);
    },

    buildCartItem(product) {
        // получаем блок для наполнения товаров в корзине
        let cart = document.querySelector('.cart__middle-block');

        // функция подсчета добавленных товаров
        let count = 0;

        for(let key in this.basket) {

            if (this.basket[key].article === product.article)
                count++;
                console.log(count);
                console.log(this.basket[key]);
        }

        // создаем элемент для товара и присваеваем класс
        let item = document.createElement('div');
        item.classList.add('item');
        item.dataset.article = product.article;

        // создаем блоки для цены и кол-ва b
        let itemName = document.createElement('div');
        itemName.textContent = product.name;
        item.appendChild(itemName);

        let itemPrice = document.createElement('div');
        itemPrice.textContent = `${product.price} руб.`;
        item.appendChild(itemPrice);

        // получаем блок для вывода количества и стоимости корзины
        let getTotalQuantity = document.querySelector('.total-quantity');
        getTotalQuantity.textContent = `КОЛ-ВО ${this.totalQuantity} шт.`;

        let getTotalPrice = document.querySelector('.total-price');
        getTotalPrice.textContent = `ИТОГО: ${this.totalPrice} руб.`;

        cart.appendChild(item);


    },

    addProductToBasket(event) {

        // ловим событие по классу order
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

                    // передаем id товара в функцию вывода корзины
                    return cart.buildCartItem(catalog.catalogData[i]);
                }
            }
        }

    },

    deleteProductFromBasket(event) {

        // ловим событие по тегу i
        if (event.target.tagName === 'I') {

            // удаляем позиции товаров из корзины
            for (let i = cart.basket.length; i > 0; i--) {
                let removeItem = document.querySelector('.cart__middle-block');
                let item = document.querySelectorAll('.item');

                removeItem.removeChild(item[i-1]);
            }

            // обнуляем показатели корзины
            cart.basket.length = 0;
            cart.totalPrice = 0;
            cart.totalQuantity = 0;

            // обновляем показатели корзины на сайте
            let getTotalQuantity = document.querySelector('.total-quantity');
            getTotalQuantity.textContent = `КОЛ-ВО ${this.totalQuantity} шт.`;

            let getTotalPrice = document.querySelector('.total-price');
            getTotalPrice.textContent = `ИТОГО: ${this.totalPrice} руб.`;
        }

    },

};

window.addEventListener('load', () => catalog.init());
window.addEventListener('load', () => cart.init());

