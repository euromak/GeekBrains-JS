'use strict';

/*
1. Программа спрашивает у пользователя температуру в градусах по Цельсию (используем prompt чтобы ее получить).
Используя alert программа выводит данную температуру в градусах по Фаренгейту.
Подсказка, расчёт идёт по формуле:
Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию.
 */

let celsius = +prompt('Введите температуру в грудусах по Цельсию');
let convertInFahrenheit = Math.floor((9 / 5) * celsius + 32);
alert(`Температура в грудусах по Фаренгейту составляет: ${convertInFahrenheit} F`);

/*
2. Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать значение из name в admin.
Вывести в консоль переменную admin (должно вывести "Василий").
*/

let admin;
let name;

name = 'Василий';
admin = name;

console.log(admin);

/*
3. Вывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии
к каждому выражению:
10 + 10 + "10"
10 + "10" + 10
10 + 10 + +"10"
10 / -""
10 / +"2,5"
*/

console.log(10 + 10 + "10");
// Ответ - 2010. Действия выполняются слева направо. Первые 2 значения по типу данных числа. 3 значение строка.
console.log(10 + "10" + 10);
// Ответ - 101010. Так как в середине стоит строка "10", выполняется 2 действия с конкатенацией.
console.log(10 + 10 + +"10");
// Ответ - 30. +"10"(+ преобразование строки в число).
console.log(10 / -"");
// Ответ - (-Infinity). Преобразованная пустая строка дает - 0. Деление на -0 дает - бесконечность
console.log(10 / +"2,5");
// Ответ - NaN. Так в значении "2,5" стоит запятая, на выходе получается некорректная мат. операция.

/*
4. Самостоятельно разобраться с атрибутами тега script (async и defer), описать комментариями для чего они,
чем отличаются.
 */

let block = document.createElement('div');
block.textContent = 'HELLO WORLD!';
document.body.appendChild(block);

// Атрибуты async и defer позволяют выполнять скрипты независимо от загрузки DOM браузером.
// Defer позволяет строго последовательно загружать скрипты. С async скрипт, который меньше выполниться первым.

/*
5. Пользователь, с помощью команды prompt, вводит номер билета - 6 цифр. Программа определяет является ли счастливым
данный билетик и выводит соответстующее сообщение в консоль. Счастливый билет - билет, у которого сумма первых трех
цифр равна сумме последних трех цифр номера билета.
Для выполнения задания необходимо использовать оператор % и ветвление.
*/

let number = +prompt('Введите номер билета', '******');

let n1 = Math.floor(number / 100000) % 10;
let n2 = Math.floor(number / 10000) % 10;
let n3 = Math.floor(number / 1000) % 10;
let n4 = Math.floor(number / 100) % 10;
let n5 = Math.floor(number / 10) % 10;
let n6 = Math.floor(number % 10);

let leftNumbers = n1 + n2 + n3;
let rightNumbers = n4 + n5 + n6;

if(leftNumbers == rightNumbers){
    alert(`Поздравляю! У вас счастливый билет! № ${number}`)
}else{
    alert(`Попробуйте еще раз!`)
}
