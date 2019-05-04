// exersise #1

// заполняем массив целыми числами от 2 до 100
var arr = [];

for (var i = 2; i < 100; i++) {
    arr[i] = true;
}

// объявляем переменную с первым простым числом
var p = 2;

do {
    // обозначаем составные числа - false
    for (i = 2 * p; i < 100; i += p) {
        arr[i] = false;
    }

    for (i = p + 1; i < 100; i++) {
        if (arr[i]) break;
    }

    p = i;
} while (p * p < 100);

var j = 0;

// выводим простые числа
while(j < arr.length) {
    j++;

    if(arr[j] === true) {
        console.log(j);
    }
}

// exersise # 2 and 3

var product1 = ['футболка', 'nike', 'муж', 3000];
var product2 = ['майка', 'reebok', 'жен', 3500];
var product3  = ['толстовка', 'reebok', 'жен', 5000];
var cart = [];

// добавляем продукт в корзину

function addToCart(item){

   if(cart.includes(item)){
       alert('В корзине есть этот товар');
       return cart;
   }
   else {
       cart.push(item);
       alert(item[0] + ' добавлена в корзину');
       return cart;
   }

}

// удаляем продукт из корзины

function removeCart(item){
    cart.pop(item);

    alert('Товар удален из корзины' + '\n' + 'В корзине: ' + cart.length + ' товар(а)');

    return cart;
}

// подсчет суммы корзины

function countBasketPrice(){
    var total = 0;

    for(i=0; i < cart.length; i++){
        total += cart[i][3];
    }

    var result = console.log('Общая стоимость корзины ' + total + ' руб');

    return result;
}

// exersise # 4

for(var i = 0; i < 10; console.log(i++)){}

// exersise # 5

var x = '';

for(i = 0; i < 20; i++){
    x += 'x';

    console.log(x);
}

