/*
* Некая сеть фастфуда предлагает несколько видов гамбургеров:
* - Маленький (50 рублей, 20 калорий).
* - Большой (100 рублей, 40 калорий).
* Гамбургер может быть с одним из нескольких видов начинок (обязательно):
* - С сыром (+10 рублей, +20 калорий).
* - С салатом (+20 рублей, +5 калорий).
* - С картофелем (+15 рублей, +10 калорий).
* Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
* Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
* */

'use strict';

class Hamburger {
    constructor(size, stuffing) {
        // массивы с информацией по гамбургерам
        this.sizeData = [];
        this.stuffingData = [];
        this.toppingData = [];

        // метрики калорийности и цены
        this.totalCalories = 0;
        this.totalPrice = 0;

        // текущий размер и начинка
        this.size = size;
        this.stuffing = stuffing;

        // индекс гамбургера
        this.hamburgerIndex = [];

        // инициализация БД гамбургеров по размеру, начинке и добавкам
        this.fetchSize();
        this.fetchStuffing();
        this.fetchTopping();

        this.addTopping(stuffing);
        this.removeTopping(stuffing);
        this.getTopping();

    }

    // Получить информацию по размеру гамбургера
    fetchSize() {
        this.sizeData = [
            {size: 'small', price: 50, calories: 20},
            {size: 'big', price: 100, calories: 40},
        ]
    }

    fetchStuffing() {
        this.stuffingData = [
            {stuffing: 'cheese', price: 10, calories: 20},
            {stuffing: 'salat', price: 20, calories: 5},
            {stuffing: 'potato', price: 15, calories: 10},
        ]
    }

    fetchTopping() {
        this.toppingData = [
            {topping: 'condiment', price: 15, calories: 0},
            {topping: 'mayonnaise', price: 20, calories: 5},
        ]
    }

    // Добавить добавку
    addTopping(topping) {
        this.toppingData.forEach((item) => {
            if (topping === item.topping) {
                this.hamburgerIndex.push(item);
                //console.log(this.hamburgerIndex);
            }
        });
    }

    // Убрать добавку
    removeTopping(topping) {
        this.hamburgerIndex.forEach((item, i) => {
            if (topping === item.topping) {
                this.hamburgerIndex.splice(i, 1);
                //console.log(this.hamburgerIndex);
            }
        });
    }

    // Получить список добавок
    getTopping() {
        console.log(this.hamburgerIndex);
    }

    // Узнать размер гамбургера
    getSize() {}

    // Узнать начинку гамбургера
    getStuffing() {}

    // Узнать цену
    calculatePrice() {}

    // Узнать калорийность
    calculateCalories() {}

}

const hamburger = new Hamburger('big', 'cheese');

console.log(hamburger);

