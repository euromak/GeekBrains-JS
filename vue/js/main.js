'use strict';

const app = new Vue({
    el: '#app',

    data: {
        api: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        catalogProducts: [],
        basketProducts: [],
        filterProducts: [],
        image: 'https://placehold.it/200x150',
        message: 'Hello Viktor',

    },

    methods: {
        getJson() {
            return fetch(`${this.api}/catalogData.json`)
                .then(response => response.json())
                .catch(error => console.log(error));
        },

        handlerData(data) {
            for(let key in data) {
                this.catalogProducts.push(data[key]);
                //console.log(this.catalogProduct);
            }
        },

        init() {
            this.getJson().then(result => this.handlerData(result));
        },

    },

    mounted() {
        this.init();
    },

});
