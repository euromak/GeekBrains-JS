'use strict';

const app = new Vue({
    el: '#app',

    data: {
        api: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        catalogProducts: [],
        basketProducts: [],
        filterProducts: [],
        images: ['https://placehold.it/200x150', 'https://placehold.it/50x100'],
        message: 'В корзине нет товаров',
        totalPrice: 0,
        totalQuantity: 0,
        currentIdx: 0,
        searchQuery: '',

    },

    methods: {
        renderCatalog() {
            const response =  fetch(`${this.api}/catalogData.json`)
                .then(response => response.json())
                .catch(error => console.log(error));

            response.then(result => {
                for(let key in result) {
                    this.catalogProducts.push(result[key]);
                    this.filterProducts.push(result[key]);
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
                    } else {
                        product.quantity = 1;
                        this.basketProducts.push(product);
                    }

                    this.totalQuantity++;
                    this.totalPrice += product.price;
                }
            });
        },

        removeFromBasket() {
            let productId = +event.target.dataset['id'];

            let response = fetch(`${this.api}/deleteFromBasket.json`).then(response => response.json());
            response.then(data => {
                if(data.result === 1) {
                    let product = this.basketProducts.find(product => product.id_product === productId);
                    if(product.quantity === 1) {
                        this.basketProducts.splice(this.basketProducts.indexOf(product), 1);
                    } else {
                        product.quantity--;
                        console.log(product);
                    }
                    this.totalQuantity--;
                    this.totalPrice -= product.price;
                }
            });
        },

        searchProduct() {
            event.preventDefault();
            let regexp = new RegExp(this.searchQuery, 'ig');
            this.filterProducts = this.catalogProducts.filter(item => regexp.test(item.product_name));
            console.log(this.filterProducts);

            this.catalogProducts.map(product => {
                if(this.searchQuery === product.product_name){
                    alert(product.id_product);
                }
            });
            console.log(this.searchQuery);
            //console.log();
        },


        cart() {
            if(document.querySelector('.cart-container').children.length === 0) {
                alert('В корзине не товаров');
            }
            return document.querySelector('.cart-container').classList.toggle('hidden');
        }

    },

    computed: {

    },

    mounted() {
        this.renderCatalog();
    },

});
