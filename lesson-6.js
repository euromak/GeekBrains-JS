var catalog = {
    catalogData: [
        {
            name: 'Свитшот',
            article: 1,
            price: 5000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_1.jpg',
        },
        {
            name: 'Пальто',
            article: 2,
            price: 9000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_2.jpg',
        },
        {
            name: 'Куртка',
            article: 3,
            price: 7500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_3.jpg',
        },
        {
            name: 'Поло',
            article: 4,
            price: 4000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_4.jpg',
        },
        {
            name: 'Свитшот',
            article: 5,
            price: 5000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_5.jpg',
        },
        {
            name: 'Куртка',
            article: 6,
            price: 5500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_6.jpg',
        },
        {
            name: 'Костюм',
            article: 7,
            price: 9000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_7.jpg',
        },
        {
            name: 'Куртка',
            article: 8,
            price: 10000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_8.jpg',
        },
        {
            name: 'Поло',
            article: 9,
            price: 2500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_9.jpg',
        },

    ],
    build: function(){
        var $catalog = document.getElementById('catalog');

        for(var i = 0; i < catalog.catalogData.length; i++){
            var $product = document.createElement('div');
            $product.classList.add('product');

            var $img = document.createElement('img');
            $img.setAttribute('src', catalog.catalogData[i].image);
            $product.appendChild($img);

            var $name = document.createElement('div');
            $name.innerHTML = catalog.catalogData[i].name;
            $product.appendChild($name);

            var $price = document.createElement('div');
            $price.innerHTML = catalog.catalogData[i].price + ' ' + 'руб';
            $product.appendChild($price);

            var $buy = document.createElement('button');
            $buy.innerHTML = 'КУПИТЬ';
            $product.appendChild($buy);

            $catalog.appendChild($product);

        }
    }
}

var cart = {};

window.addEventListener('load', catalog.build);