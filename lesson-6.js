var catalog =   {
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
    build: function(){
        var $catalog = document.querySelector('#catalog');

        for(var i = 0; i < catalog.catalogData.length; i++){
            var $product = document.createElement('div');
            $product.classList.add('product');

            var $img = document.createElement('img');
            $img.setAttribute('src', catalog.catalogData[i].image);
            $img.dataset.article = +catalog.catalogData[i].article;
            $product.appendChild($img);

            var $name = document.createElement('div');
            $name.innerHTML = catalog.catalogData[i].name;
            $product.appendChild($name);

            var $price = document.createElement('div');
            $price.innerHTML = catalog.catalogData[i].price + ' ' + 'руб';
            $product.appendChild($price);

            var $buy = document.createElement('button');
            $buy.classList.add('btn');
            $buy.innerHTML = 'КУПИТЬ';
            $buy.dataset.article = +catalog.catalogData[i].article;
            $product.appendChild($buy);

            $catalog.appendChild($product);

        }

    },
    showModal: function(){
        var $catalog = document.querySelector('#catalog');
        $catalog.addEventListener('click', openModal);
        var $modal = document.querySelector('#modal');
        $modal.addEventListener('click', closeModal);
        var $imageBig = document.createElement('img');
        $imageBig.classList.add('bigImage');

        var $prev = document.createElement('div');
        $prev.classList.add('prev');
        $modal.addEventListener('click', nextImg);

        var $next = document.createElement('div');
        $next.classList.add('next');
        $modal.addEventListener('click', prevImg);


        function openModal(event){
            if(event.target.tagName === 'IMG'){
                for(var i = 0; i < catalog.catalogData.length; i++){
                    if(event.target.dataset.article == catalog.catalogData[i].article){
                        $imageBig.src = catalog.catalogData[i].imageBig;
                        $modal.appendChild($imageBig);

                        $prev.textContent = '<---';
                        $prev.dataset.article = catalog.catalogData[i].article;
                        $modal.appendChild($prev);

                        $next.innerHTML = '--->';
                        $next.dataset.article = catalog.catalogData[i].article;
                        $modal.appendChild($next);
                        $modal.style.display = 'flex';
                    }
                }
            }
        }

        function closeModal(event){
            $modal.removeChild($imageBig);
            $modal.removeAttribute('style');
        }

        function nextImg(event){
            if(event.target.className == 'next'){
                for(var i = 0; i < catalog.catalogData.length; i++){
                    if(event.target.dataset.article == catalog.catalogData[i].article){
                        $imageBig.src = '';
                        $imageBig.src = catalog.catalogData[i+1].imageBig;
                        $next.dataset.article++;
                        $modal.insertBefore($imageBig, $prev);
                        $modal.style.display = 'flex';
                        break;
                    }

                }

            }
        }

        function prevImg(event){
            if(event.target.className == 'prev'){
                for(var i = event.target.dataset.article; i <= catalog.catalogData.length; i--){
                    if(event.target.dataset.article == catalog.catalogData[i].article){
                        $imageBig.src = '';
                        $imageBig.src = catalog.catalogData[i-1].imageBig;
                        $prev.dataset.article--;
                        $modal.insertBefore($imageBig, $prev);
                        $modal.style.display = 'flex';
                        break;
                    }
                }
            }
        }
    },
}

var cart = {
    basket: [],
    priceTotal: 0,
    quantity: 0,
    build: function(){
        var $catalog = document.querySelector('#catalog');
        var $cart = document.createElement('div');
        $cart.setAttribute('id', 'cart');
        $cart.innerHTML = '<i class="fa fa-shopping-basket" aria-hidden="true"></i><b> КОРЗИНА:</b>';

        var $removeCart = document.createElement('div');
        $removeCart.classList.add('removeCart');
        $removeCart.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
        $cart.addEventListener('click', cart.delete);
        $cart.appendChild($removeCart);

        var $totalQuantity = document.createElement('div');
        $totalQuantity.innerHTML = '<b>КОЛ-ВО: </b>' + cart.quantity + ' шт.';
        $totalQuantity.id = 'totalQuantity';
        $cart.appendChild($totalQuantity);

        var $totalPriceCart = document.createElement('div');
        $totalPriceCart.innerHTML = '<b>ИТОГО: </b>' + cart.priceTotal + ' руб.';
        $totalPriceCart.id = 'Totalprice';
        $cart.appendChild($totalPriceCart);

        document.body.insertBefore($cart, $catalog);
    },
    buildCartItem: function(){
        var $cart = document.querySelector('#cart');
        var $item = document.createElement('div');
        $item.classList = 'item';
        var $totalQuantity = document.getElementById('totalQuantity');
        $item.innerHTML = cart.basket[cart.basket.length-1].name + ' ' + cart.basket[cart.basket.length-1].price + ' руб.';
        $cart.insertBefore($item, $totalQuantity);
    },
    add: function(){
        var $getButton = document.querySelector('#catalog');
        $getButton.addEventListener('click', addBasket);

        function addBasket(event){
            if(event.target.className === 'btn'){

                for(var i = 0; i < catalog.catalogData.length; i++){

                    if(event.target.dataset.article == catalog.catalogData[i].article){
                        cart.basket.push(catalog.catalogData[i]);
                        cart.quantity++;
                        cart.priceTotal += catalog.catalogData[i].price;

                        var $totalQuantity = document.getElementById('totalQuantity');
                        $totalQuantity.innerHTML = '<b>КОЛ-ВО: </b>' + cart.quantity + ' шт.';

                        var $totalPriceCart = document.getElementById('Totalprice');
                        $totalPriceCart.innerHTML = '<b>ИТОГО: </b>' + cart.priceTotal + ' руб.';

                        cart.buildCartItem();

                        break;
                    }

                }

            }
        }
    },
    delete: function(event){
        if(event.target.tagName == 'I'){
            for(var i = cart.basket.length; i > 0; i--){
                var $cart = document.getElementById('cart');
                var $items = document.getElementsByClassName('item')[i-1];

                $cart.removeChild($items);
            }

            cart.priceTotal = 0,
                cart.quantity = 0;
            cart.basket.length = 0;

            var $totalQuantity = document.getElementById('totalQuantity');
            $totalQuantity.innerHTML = '<b>КОЛ-ВО: </b>' + cart.quantity + ' шт.';

            var $totalPriceCart = document.getElementById('Totalprice');
            $totalPriceCart.innerHTML = '<b>ИТОГО: </b>' + cart.priceTotal + ' руб.';

            return alert('Корзина очищена');
        }
    }
}

window.addEventListener('load', catalog.build);
window.addEventListener('load', catalog.showModal);
window.addEventListener('load', cart.build);
window.addEventListener('load', cart.add);







