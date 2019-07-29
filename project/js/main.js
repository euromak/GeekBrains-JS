'use strict';
/*const products = [
  {id: 1, title: 'Куртка', price: 10000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_1.jpg',},
  {id: 2, title: 'Пальто', price: 10000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_2.jpg',},
  {id: 3, title: 'Куртка', price: 7500, image: 'https://www.topmangal.com/wp-content/uploads/man/product_3.jpg',},
  {id: 4, title: 'Поло', price: 4500, image: 'https://www.topmangal.com/wp-content/uploads/man/product_4.jpg',},
  {id: 5, title: 'Худи', price: 6000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_5.jpg',},
  {id: 6, title: 'Куртка', price: 7000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_6.jpg',},
  {id: 7, title: 'Пиджак', price: 5500, image: 'https://www.topmangal.com/wp-content/uploads/man/product_7.jpg',},
  {id: 8, title: 'Куртка', price: 9000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_8.jpg',},
];

const renderProduct = (title, price, image) => {
  return `<div class="product-item">
            <img src="${image}" alt="">
            <h3>${title}</h3>
            <p>${price} руб.</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderProducts = list =>
  document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price, item.image))
      .join('');
;

renderProducts(products);
*/


class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
    this.countTotalPrice(this.goods);
  }

  _fetchProducts() {
    this.goods = [
        {id: 1, title: 'Куртка', price: 10000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_1.jpg',},
        {id: 2, title: 'Пальто', price: 10000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_2.jpg',},
        {id: 3, title: 'Куртка', price: 7500, image: 'https://www.topmangal.com/wp-content/uploads/man/product_3.jpg',},
        {id: 4, title: 'Поло', price: 4500, image: 'https://www.topmangal.com/wp-content/uploads/man/product_4.jpg',},
        {id: 5, title: 'Худи', price: 6000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_5.jpg',},
        {id: 6, title: 'Куртка', price: 7000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_6.jpg',},
        {id: 7, title: 'Пиджак', price: 5500, image: 'https://www.topmangal.com/wp-content/uploads/man/product_7.jpg',},
        {id: 8, title: 'Куртка', price: 9000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_8.jpg',},
    ];
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

    /*const arrFilter = products.map((item) => {
      if (item.price >= 9000) return item;
    });

    arrFilter.forEach((item, i) => {
      if (item === undefined) {
        arrFilter.splice(i);
      }
    });

    console.log(arrFilter);
    */
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