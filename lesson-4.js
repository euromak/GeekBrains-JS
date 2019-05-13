// EXERSISE # 1

var number = prompt('Введите число от 0 до 999');



function convert(number){
    var i;
    var objectNumber = {};

// Проверка вхождения числа в ряд заданных чисел
    if(number > 999 || number < 0){
        alert('Вы ввели неверное число');
        return objectNumber;
    }
    else if(number == null){
        alert('Ввод отменен');
        return number;
    }

/*
Определяем кол-во символов в полученной строке и создаем ветки в зависимости от кол-ва символов.
В каждой ветке обращаемся к символу, преобразуем его в числовой тип данных и добавляем свойство со значением в объект.
*/
    for(i = 0; i < number.length; i++){
        switch(number.length){
            case 1:
                objectNumber.units = +number.charAt(0);
                console.log(i);
                break;
            case 2:
                if(i == 1){
                    objectNumber.decades = +number.charAt(0);
                    objectNumber.units = +number.charAt(1);
                }
                console.log(i);
                break;
            case 3:
                objectNumber.hundreds = +number.charAt(0);
                objectNumber.decades = +number.charAt(1);
                objectNumber.units = +number.charAt(2);
                console.log(i);
                break;
        }

    }
    console.log(objectNumber);
    return objectNumber;
}

convert(number);


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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
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
            description: "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
            sale: false,

        },
    ],
    priceTotal: 0,
    quantity: 0,
    add: function(){
        var basket = this.basket;
        var products = this.products;
    // товар добавляется последовательно 1,2,3...
        for(var i = 0; i < products.length; i++){
            var answer = cart.showCatalog();
            // проверка ответа пользователя со значениями продуктов
            if(+answer === products[i].article || answer === products[i].name){
                basket.push(products[i]);
                this.priceTotal += products[i].price;
                this.quantity++;
                alert("Добавлен товар: \n" + cart.products[i].name + " - " + cart.products[i].price + " руб." + '\n\n' + "Ваша корзина: \n" + "Кол-во - " + this.quantity + "\n" + "Общая стоимость - " + this.priceTotal + " руб");
            }
            else if(answer == null){
                break;
            }
            else{
                alert("Ваша корзина: \n" + "Кол-во - " + this.quantity + "\n" + "Общая стоимость - " + this.priceTotal + " руб");
            }
        }


        return basket;
    },
    delete: function(){},
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
        var output = "";

        // (выводим номер / название продукта / стоимость) с новой строки
        for(var i = 0; i < cart.products.length; i++){
            output += (i + 1) + ") " + cart.products[i].name + " - " + cart.products[i].price + " руб." + '\n';
        }

        return prompt(output);
    },
};

cart.add();



