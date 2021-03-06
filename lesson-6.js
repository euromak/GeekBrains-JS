/*

1)
- Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
- Пустая корзина должна выводить строку «Корзина пуста»;
- Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
2)
- Сделать так, чтобы товары в каталоге выводились при помощи JS:
- Создать массив товаров (сущность Product);
- При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
3)
- Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
- Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
4)
- У товара может быть несколько изображений. Нужно:
- Реализовать функционал показа полноразмерных картинок товара в модальном окне;
- Реализовать функционал перехода между картинками внутри модального окна.
5)
- Реализовать страницу корзины:
- Добавить возможность не только смотреть состав корзины, но и редактировать его, обновляя общую стоимость или выводя сообщение «Корзина пуста».
6)
- На странице корзины:
- Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
- Сделать эти поля сворачиваемыми;
- Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого есть кнопка «Далее». Если нажать ее, сворачивается «Состав корзины» и открывается «Адрес доставки» и так далее.

*/

'use strict';

// каталог
var catalog =   {
    // база товаров
    catalogData: [
        {
            name: 'Свитшот',
            article: 0,
            price: 5000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_1.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_1.jpg',
        },
        {
            name: 'Пальто',
            article: 1,
            price: 9000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_2.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_2.jpg',
        },
        {
            name: 'Куртка',
            article: 2,
            price: 7500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_3.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_3.jpg',
        },
        {
            name: 'Поло',
            article: 3,
            price: 4000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_4.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_4.jpg',
        },
        {
            name: 'Свитшот',
            article: 4,
            price: 5000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_5.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_5.jpg',
        },
        {
            name: 'Куртка',
            article: 5,
            price: 5500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_6.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_6.jpg',
        },
        {
            name: 'Костюм',
            article: 6,
            price: 9000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_7.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_7.jpg',
        },
        {
            name: 'Куртка',
            article: 7,
            price: 10000,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_8.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_8.jpg',
        },
        {
            name: 'Поло',
            article: 8,
            price: 2500,
            image: 'https://www.topmangal.com/wp-content/uploads/man/product_9.jpg',
            imageBig: 'https://www.topmangal.com/wp-content/uploads/man/product_big_9.jpg',
        },

    ],
    // метод, выводящий каталог
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
    // метод, выводящий модальное окно
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
        $item.innerHTML = cart.basket[cart.basket.length-1].name + ' ' + cart.basket[cart.basket.length-1].price + ' руб. ' + ' <i class="closeItem fa fa-times-circle" aria-hidden="true"></i>';
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

                        for(var j = 0; j < catalog.catalogData.length; j++){
                            if(event.target.dataset.article == catalog.catalogData[j].article){
                                var $closeItem = document.getElementsByClassName('closeItem')[j];
                                $closeItem.dataset.article = event.target.dataset.article;
                                console.log(event.target.dataset.article);
                            }
                        }
                    }
                }
            }
        }
    },
    delete: function(event){
        if(event.target.className === 'fa fa-trash-o'){
            for(var i = cart.basket.length; i > 0; i--){
                var $cart = document.getElementById('cart');
                var $items = document.getElementsByClassName('item')[i-1];

                $cart.removeChild($items);
            }

            cart.priceTotal = 0;
            cart.quantity = 0;
            cart.basket.length = 0;

            var $totalQuantity = document.getElementById('totalQuantity');
            $totalQuantity.innerHTML = '<b>КОЛ-ВО: </b>' + cart.quantity + ' шт.';

            var $totalPriceCart = document.getElementById('Totalprice');
            $totalPriceCart.innerHTML = '<b>ИТОГО: </b>' + cart.priceTotal + ' руб.';

            return alert('Корзина очищена');
        }
        else if(event.target.className === 'closeItem fa fa-times-circle'){
            var $closeItem = document.getElementsByClassName('closeItem');

            for(var j = 0; j < 10; j++){

                if(event.target.dataset.article == catalog.catalogData[j].article){
                    $closeItem[j].parentNode.style.display = 'none';
                    cart.basket.splice(event.target.dataset.article, 1);
                    cart.quantity--;
                    cart.priceTotal -= catalog.catalogData[j].price;

                    var $totalQuantity = document.getElementById('totalQuantity');
                    $totalQuantity.innerHTML = '<b>КОЛ-ВО: </b>' + cart.quantity + ' шт.';

                    var $totalPriceCart = document.getElementById('Totalprice');
                    $totalPriceCart.innerHTML = '<b>ИТОГО: </b>' + cart.priceTotal + ' руб.';
                    break;
                }
            }
        }
    }
}

window.addEventListener('load', catalog.build);
window.addEventListener('load', catalog.showModal);
window.addEventListener('load', cart.build);
window.addEventListener('load', cart.add);







