'use strict';

/*
1. Программа спрашивает у пользователя температуру в градусах по Цельсию (используем prompt чтобы ее получить). Используя alert программа выводит данную температуру в градусах по Фаренгейту.
Подсказка, расчёт идёт по формуле:
Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию.
 */

let celsius = +prompt('Введите температуру в грудусах по Цельсию');

let convertInFahrenheit = (9 / 5) * celsius + 32;

alert('Температура в грудусах по Фаренгейту составляет: ' + convertInFahrenheit);

/*
2. Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать значение из name в admin. Вывести в консоль переменную admin (должно вывести "Василий").
*/

let admin;
let name;

name = 'Василий';