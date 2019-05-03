// exersise #1

/*
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
 */

var i = 0;
var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

while(i < 100) {

    if(i / arr[i]) {
        console.log(arr[i]);
    }

    i++;
}

// exersise # 2 and 3

var product1 = ['футболка', 'nike', 'муж', 3000];
var product2 = ['майка', 'reebok', 'жен', 3500];
var product3  = ['толстовка', 'reebok', 'жен', 5000];
var cart = [];

// добавляем продукт в корзину

function addToCart(item) {

   if(cart.includes(item)) {
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

function removeCart(item) {
    cart.pop(item);
    alert('Товар удален из корзины' + '\n' + 'В корзине: ' + cart.length + ' товар(а)');
    return cart;
}

// подсчет суммы корзины

function countBasketPrice() {
    var total = 0;

    for(i=0; i < cart.length; i++) {
        total += cart[i][3];
    }

    var result = console.log('Общая стоимость корзины ' + total + ' руб');

    return result;
}

// exersise # 4

for(var i = 0; i < 10; console.log(i++)) {}

// exersise # 5

var x = '';

for(i = 0; i < 20; i++) {
    x += 'x';
    console.log(x);
}

