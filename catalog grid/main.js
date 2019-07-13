'use strict';

// создаем сетку товаров
const catalog = {
    catalogData: [
        {
            name: 'Свитшот',
            article: 1,
            price: 5000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_1.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_1.jpg',
        },
        {
            name: 'Пальто',
            article: 2,
            price: 9000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_2.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_2.jpg',
        },
        {
            name: 'Куртка',
            article: 3,
            price: 7500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_3.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_3.jpg',
        },
        {
            name: 'Поло',
            article: 4,
            price: 4000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_4.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_4.jpg',
        },
        {
            name: 'Свитшот',
            article: 5,
            price: 5000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_5.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_5.jpg',
        },
        {
            name: 'Куртка',
            article: 6,
            price: 5500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_6.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_6.jpg',
        },
        {
            name: 'Костюм',
            article: 7,
            price: 9000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_7.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_7.jpg',
        },
        {
            name: 'Куртка',
            article: 8,
            price: 10000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_8.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_8.jpg',
        },
        {
            name: 'Поло',
            article: 9,
            price: 2500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_9.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_9.jpg',
        },

    ],
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
            button.textContent = 'ЗАКАЗАТЬ';
            productInfo.appendChild(button);


            container.appendChild(product);
        }
    },
};

window.addEventListener('load', () => catalog.buildGrid());