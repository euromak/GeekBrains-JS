'use strict';

//
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ
let makeGetRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject('Error');
                } else {
                    resolve(xhr.responseText);
                }
            }
        };
        xhr.send();
    });
};

makeGetRequest(`${API}/catalogData.json`).then(result => console.log(result)).catch(error => console.log(error));

// описываем класс списка каталога продуктов
class List {
  constructor(container, url, list) {
    this.container = container;
    this.list = list;
    this.url = url;
    this.goods = [];
    this.allProducts = [];
    this.filter = [];
    this._init = [];
  }

  // метод подтягивающий продукты из API
  getJSON(url) {
    return fetch(url ? url : `${API + this.url}`).then(result => result.json()).catch(error => console.log(error));
  }

  // метод вставлящий полученный объект в массив и запускающий вывод товаров на страницу
  handleData(data) {
    this.goods = [...data];
    this.render();
  }

  // метод расчета общей суммы товаров
  calcSum() {
    return this.allProducts.reduce((accum, item) => accum += item.price, 0);
  }

  // метод выводящий товары на страницу
  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      console.log(this.constructor.name);
      const productObj = new this.list[this.constructor.name](product);
      console.log(productObj);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }

  // метод для инициализации
  _init() {
    return false;
  }
}


class ProductList extends List {
  constructor(container = '.products', url) {
    super(container, url);
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
    this.countTotalPrice(this.goods);
  }

  _fetchProducts() {

  }

  render() {
    const block = document.querySelector(this.container);

    for(let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  countTotalPrice(products) {
    let totalPrice = 0;

    products.forEach((item) => totalPrice += item.price);
    console.log(`В каталоге ${products.length} товаров на сумму ${totalPrice} руб.`);

  }
}

// создаем класс для каждого продукта
class ProductItem {
  constructor(product) {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.image = product.image;
  }
  // метод render для генерации разметки товара
  render() {
    return `<div class="product-item" data-id="${this.id}">
          <img src="${this.image}" alt="image product">
          <h3>${this.title}</h3>
          <p>${this.price} руб.</p>
          <button class="by-btn">Добавить</button>
        </div>`;
  }
}

class Cart {

  constructor(container = '#basket', catalog = '.products') {
    this.container = container;
    this.catalog = catalog;
    this.basket = [];
    this.totalPrice = 0;
    this.quantity = 0;
    this.init();
    this.addProductToCart();
    this.deleteProductFromCart();
    this.render();
    this.countTotalPrice();
  }

  init() {

  }

  addProductToCart() {

  }

  deleteProductFromCart() {

  }

  render() {

  }

  countTotalPrice() {

  }
}

class CartItem extends ProductItem{
  constructor(product) {
    super(product);
  }

  render() {
    return `<div class="basket-product" data-id="${this.id}">
        <img src="${this.img}" alt="${this.title}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        </div>`;
  }
}

const list = new ProductList();
const cart = new Cart();