'use strict';

const app = new Vue({
    el: '#app',

    data: {
        api: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        catalogProducts: [],
        basketProducts: [],
        filterProducts: [],
        images: ['https://placehold.it/200x150', 'https://placehold.it/50x100'],
        message: 'Hello Viktor',
        totalPrice: 0,
        totalQuantity: 0,

    },

    methods: {
        renderCatalog() {
            const response =  fetch(`${this.api}/catalogData.json`)
                .then(response => response.json())
                .catch(error => console.log(error));

            response.then(result => {
                for(let key in result) {
                    this.catalogProducts.push(result[key]);
                    //console.log(this.catalogProducts);
                }
            })
        },

        addToBasket() {
            let productId = +event.target.dataset['id'];

            let response = fetch(`${this.api}/addToBasket.json`).then(response => response.json());
            response.then(data => {
                if(data.result === 1) {
                    let product = this.catalogProducts.find(product => product.id_product === productId);
                    if(this.basketProducts.includes(product)) {
                        product.quantity++;
                        console.log(this.basketProducts);
                    } else {
                        product.quantity = 1;
                        this.basketProducts.push(product);
                        console.log(this.basketProducts);
                    }
                }
            });
        },

        cart() {
            if(document.querySelector('.cart-container').children.length === 0) alert('В корзине не товаров');
            return document.querySelector('.cart-container').classList.toggle('hidden');
        }

    },

    computed: {

    },

    mounted() {
        this.renderCatalog();
    },

});
