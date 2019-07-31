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

        // массив начинок
        this.stuffingIndex = [];

        // массив добавок
        this.toppingIndex = [];

        // инициализация БД гамбургеров по размеру, начинке и добавкам
        this.fetchSize();
        this.fetchStuffing();
        this.fetchTopping();

        // добавить размер бургера в массив
        this.addHamburger(size);

        // добавить начинку
        this.addStuffing(stuffing);

        // добавить/убрать добавку в индекс
        this.addTopping(stuffing);
        this.removeTopping(stuffing);

        // получить список добавок
        this.getTopping();

        // получить размер гамбургера
        this.getSize();

        // получить начинку
        this.getStuffing();

        // рассчитываем стоимость бургера
        this.calculatePrice();

        // рассчитываем кол-во калорий бургера
        this.calculateCalories();

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

    // Добавить бургер в массив
    addHamburger(size) {
        this.sizeData.forEach(item => {
            if (item.size === size) {
                this.hamburgerIndex.push(item);
            }
        });
    }

    // Добавить начинку
    addStuffing(stuffing) {
        this.stuffingData.forEach(item => {
            if (item.stuffing === stuffing) {
                this.stuffingIndex.push(item);
            }
        });
    }

    // Добавить добавку
    addTopping(topping) {
        this.toppingData.forEach(item => {
            if (topping === item.topping) {
                this.toppingIndex.push(item);
                //console.log(this.toppingIndex);
            }
        });
    }

    // Убрать добавку
    removeTopping(topping) {
        this.toppingIndex.forEach((item, i) => {
            if (topping === item.topping) {
                this.toppingIndex.splice(i, 1);
                //console.log(this.toppingIndex);
            }
        });
    }

    // Получить список добавок
    getTopping() {
        for (let i = 0; i < this.toppingIndex.length; i++) {
            console.log(this.toppingIndex[i]);
        }
    }

    // Узнать размер гамбургера
    getSize() {
        console.log(`Размер вашего бургера: ${this.size}`);
    }

    // Узнать начинку гамбургера
    getStuffing() {
        console.log(`Начинка вашего бургера: ${this.stuffing}`);
    }

    // Узнать цену
    calculatePrice() {
        const totalIndex = this.hamburgerIndex.concat(this.stuffingIndex, this.toppingIndex);

        totalIndex.forEach(item => this.totalPrice += item.price);

        console.log(`Стоимость вашего бургера ${this.totalPrice} руб.`);
    }

    // Узнать калорийность
    calculateCalories() {
        const totalIndex = this.hamburgerIndex.concat(this.stuffingIndex, this.toppingIndex);

        totalIndex.forEach(item => this.totalCalories += item.calories);

        console.log(`Калорийность бургера составляет ${this.totalCalories} Ккал.`);
    }

}

const buildBurger = {
    getSize: '',
    getStuffing: '',
    getTopping: '',
    container: document.querySelector('.burger'),
    messageContainer: document.querySelector('.messageBox'),
    littleBurger: document.querySelector('#littleBurger'),
    bigBurger: document.querySelector('#bigBurger'),
    blockMessage: document.querySelector('.message'),
    blockStuffing: document.querySelector('.stuffing'),
    blockTopping: document.querySelector('.topping'),

    init() {
        this.container.addEventListener('click', (event) => {this.askSize(event)});
        this.blockStuffing.addEventListener('click', (event) => {this.askStuffing(event)});
        this.blockTopping.addEventListener('click', (event) => {this.askTopping(event)});
    },

    askSize(event) {
        if (event.target.id === 'breadTop1') {
            this.getSize = 'small';
            this.bigBurger.style.display = 'none';
            this.blockMessage.textContent = 'ВЫБЕРИТЕ НАЧИНКУ';
            this.blockStuffing.style.display = 'flex';
        } else if(event.target.id === 'breadTop') {
            this.getSize = 'big';
            this.littleBurger.style.display = 'none';
            this.blockMessage.textContent = 'ВЫБЕРИТЕ НАЧИНКУ';
            this.blockStuffing.style.display = 'flex';
        }
    },

    askStuffing(event) {
        if (event.target.id === 'cheeseStuff') {
            this.getStuffing = 'cheese';
            this.blockStuffing.style.display = 'none';
            this.blockMessage.textContent = 'ВЫБЕРИТЕ ДОБАВКУ';
            this.blockTopping.style.display = 'flex';
        } else if(event.target.id === 'salatStuff') {
            this.getStuffing = 'salat';
            this.blockStuffing.style.display = 'none';
            this.blockMessage.textContent = 'ВЫБЕРИТЕ ДОБАВКУ';
            this.blockTopping.style.display = 'flex';
        } else {
            this.getStuffing = 'potato';
            this.blockStuffing.style.display = 'none';
            this.blockMessage.textContent = 'ВЫБЕРИТЕ ДОБАВКУ';
            this.blockTopping.style.display = 'flex';
        }
    },

    askTopping(event) {
        if (event.target.id === 'condiment') {
            this.getTopping = 'condiment';
            this.blockMessage.textContent = '';
            this.blockTopping.style.display = 'none';
            this.out(this.getSize, this.getStuffing);
        } else if(event.target.id === 'mayonnaise') {
            this.getTopping = 'mayonnaise';
            this.blockMessage.textContent = '';
            this.blockTopping.style.display = 'none';
        }
    },

    out(size) {
        return size;
    }
};

const hamburger = new Hamburger(buildBurger.out(size), 'cheese');

window.addEventListener('load', () => buildBurger.init());




//console.log(hamburger);

