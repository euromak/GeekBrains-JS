// EXERSISE # 1

function chessmate(){
    var $table = document.createElement('div');
    $table.classList.add('table');
    document.body.appendChild($table);

    var $row = document.createElement('div');
    $row.classList.add('row');

    var $cell = document.createElement('div');
    $cell.classList.add('cell');

    for(var i = 0; i < 8; i++){
        var $row = document.createElement('div');
        $row.classList.add('row');

        var $numberRow = document.createElement('div');
        $numberRow.classList = 'number';
        $numberRow.innerHTML = 8-i;
        $row.insertBefore($numberRow, $row[1]);


        for(var j = 0; j < 8; j++){
            var $cell = document.createElement('div');
            $cell.classList.add('cell');

            if(i % 2 == 0 && j % 2 == 1){
                $cell.classList.add('black');
            }
            else if(i % 2 == 1 && j % 2 == 0){
                $cell.classList.add('black');
            }

            $row.appendChild($cell);
        }

        $row.appendChild($numberRow.cloneNode($numberRow));
        $table.appendChild($row);
    }

    for(i = 0; i < 8; i++){
        var letterRow = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        var letterRowReverse = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
        var $letterRowBottom = document.createElement('div');
        var $letterRowTop = document.createElement('div');
        $letterRowTop.classList.add('letter');
        $letterRowBottom.classList.add('letter');
        $letterRowBottom.innerHTML = letterRow[i];
        $letterRowTop.innerHTML = letterRowReverse[i];
        $table.insertBefore($letterRowTop.cloneNode($letterRowTop), $table.children[0]);
        $table.appendChild($letterRowBottom.cloneNode($letterRowBottom));
    }
}

chessmate();



// EXERSISE # 2

var cart = {
    basket: [],
    products: [
        {
            name: 'Футболка Mango LifeStyle',
            article: 1,
            price: 3000,
            quantity: 0,
            category: 't-shirt',
            brand: 'mango',
            sex: 'female',
            size: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
            color: ['white', 'black', 'red', 'green', 'blue'],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: false,
        },
        {
            name: 'Брюки Lacoste',
            article: 2,
            price: 8000,
            quantity: 0,
            category: 'pants',
            brand: 'lacoste',
            sex: 'male',
            size: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
            color: ['white', 'black', 'red', 'green', 'blue'],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: false,
        },
        {
            name: 'Шорты Ostin',
            article: 3,
            price: 1500,
            quantity: 0,
            category: 'shorts',
            brand: 'ostin',
            sex: 'male',
            size: ['s', 'm', 'l', 'xl', 'xxl'],
            color: ['red', 'green', 'blue'],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: false,
        },
        {
            name: 'Рубашка Lacoste',
            article: 4,
            price: 5500,
            quantity: 0,
            category: 'shirt',
            brand: 'lacoste',
            sex: 'male',
            size: ['s', 'm', 'l', 'xl', 'xxl'],
            color: ['white', 'blue'],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: false,

        },
        {
            name: 'Тостовка City',
            article: 5,
            price: 9999,
            quantity: 0,
            category: 'sweatshirt',
            brand: 'Armani',
            sex: 'female',
            size: ['xxs', 'xs', 's', 'm',],
            color: ['black', 'purple'],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: false,
        },
        {
            name: 'Брюки Zara',
            article: 6,
            price: 4000,
            quantity: 0,
            category: 'pants',
            brand: 'zara',
            sex: 'unisex',
            size: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
            color: ['black',],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: false,

        },
        {
            name: 'Брюки Street style',
            article: 7,
            price: 5000,
            quantity: 0,
            category: 'pants',
            brand: 'mango',
            sex: 'female',
            size: ['xxs', 'xs', 's', 'm',],
            color: ['white', 'black', 'blue'],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: false,
        },
        {
            name: 'Футболка Black Diamond',
            article: 8,
            price: 1100,
            quantity: 0,
            category: 't-shirt',
            brand: 'lacoste',
            sex: 'female',
            size: ['xxs', 'xs', 's', 'm',],
            color: ['white', 'black', 'red', 'green', 'blue'],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: true,

        },
        {
            name: 'Футболка Zara',
            article: 9,
            price: 3500,
            quantity: 0,
            category: 't-shirt',
            brand: 'zara',
            sex: 'unisex',
            size: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
            color: ['white', 'black',],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: false,
        },
        {
            name: 'Ремень',
            article: 10,
            price: 4000,
            quantity: 0,
            category: 'accessories',
            brand: 'lacoste',
            sex: 'male',
            size: ['l', 'xl', 'xxl'],
            color: ['blue'],
            description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
            sale: false,

        },
    ],
    priceTotal: 0,
    quantity: 0,
    add: function(){
        var basket = this.basket;
        var products = this.products;
        var i;
        var answer = cart.showCatalog();

        for(i = 0; i < products.length; i++){

            if(answer == products[i].article || answer === products[i].name){
                basket.push(products[i]);
                this.priceTotal += products[i].price;
                this.quantity++;
                alert('Добавлен товар: \n' + cart.products[i].name + ' - ' + cart.products[i].price + ' руб.' + '\n\n' + 'Ваша корзина: \n' + 'Кол-во - ' + this.quantity + '\n' + 'Общая стоимость - ' + this.priceTotal + ' руб');
                break;
            }
            else if(answer == null){
                break;
            }
        }

        var message = confirm('Продолжить покупки?');

        if(message == true){
            this.add();
        }
        else{
            alert('Ваша корзина: \n' + 'Кол-во - ' + this.quantity + '\n' + 'Общая стоимость - ' + this.priceTotal + ' руб');
            this.showCart();
        }

        return basket;
    },
    delete: function(){
        var deleteBaslek = confirm("Очистить корзину?");

        if(deleteBaslek == true){
            this.basket.length = 0;
            alert("Корзина очищена");
        }

        return this.basket;
    },
    amount: function(){
        var basket = this.basket;

        if(this.priceTotal == 0){
            for(var i = 0; i < basket.length; i++){
                this.priceTotal += basket[i].price;
                console.log(i);
            }
        }

        return this.priceTotal;
    },
    showCatalog: function(){
        var output = '';

        // (выводим номер / название продукта / стоимость) с новой строки
        for(var i = 0; i < cart.products.length; i++){
            output += (i + 1) + ') ' + cart.products[i].name + ' - ' + cart.products[i].price + ' руб.' + '\n';
        }

        return prompt(output);
    },
    showCart: function(){
        var $cart = document.getElementById('cart');
        $cart.style.position = 'absolute';

        if(this.quantity > 0){
            $cart.innerHTML = 'В корзине: ' + this.quantity + ' товар(ов)' + ' на сумму: ' + this.priceTotal + ' руб.';
        }
        else{
            $cart.innerHTML = 'Ваша корзина пуста';
        }

    },
    showCalalogPage: function(){
        var $catalog = document.getElementById('catalog');

        var $product = document.createElement('div');
        $product.className = 'products';


        for(var i = 0; i < this.products.length; i++){
            var $item = document.createElement('div');
            $item.className = 'item';
            $item.style.border = '1px solid black';
            $item.innerHTML = this.products[i].name + '' + this.products[i].brand + '' + this.products[i].price;
            $product.appendChild($item);
        }

        $catalog.appendChild($product);
    }
};

cart.add();

// EXERSISE # 3

cart.showCalalogPage();









