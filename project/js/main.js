const products = [
  {id: 1, title: 'Notebook', price: 1000, image: 'https://www.topmangal.com/wp-content/uploads/man/product_1.jpg',},
  {id: 2, title: 'Mouse', price: 100, image: 'https://www.topmangal.com/wp-content/uploads/man/product_2.jpg',},
  {id: 3, title: 'Keyboard', price: 250, image: 'https://www.topmangal.com/wp-content/uploads/man/product_3.jpg',},
  {id: 4, title: 'Gamepad', price: 150, image: 'https://www.topmangal.com/wp-content/uploads/man/product_4.jpg',},
  {id: 5, title: 'Gamepad', price: 150, image: 'https://www.topmangal.com/wp-content/uploads/man/product_5.jpg',},
  {id: 6, title: 'Gamepad', price: 150, image: 'https://www.topmangal.com/wp-content/uploads/man/product_6.jpg',},
  {id: 7, title: 'Gamepad', price: 150, image: 'https://www.topmangal.com/wp-content/uploads/man/product_7.jpg',},
  {id: 8, title: 'Gamepad', price: 150, image: 'https://www.topmangal.com/wp-content/uploads/man/product_8.jpg',},
];

const renderProduct = (title, price, image) => {
  return `<div class="product-item">
            <img src="${image}" alt="">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderProducts = list =>
  document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price, item.image)).join('');
;

renderProducts(products);
