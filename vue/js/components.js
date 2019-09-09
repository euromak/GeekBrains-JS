/**
 * Компонент поиска
 */
Vue.component('search', {
    props: ['filter', 'catalog'],
    data(){return {
        searchQuery: '',
        catalogProducts: [],
        filtredProducts: [],
    };
    },

    methods: {
        searchProduct() {
            event.preventDefault();
            let regexp = new RegExp(searchString, 'ig');
            this.filterProducts = this.catalogProducts.filter(item => regexp.test(item.product_name));
            console.log(filter);

            this.catalogProducts.map(product => {
                if(this.searchQuery === product.product_name){
                    alert(product.id_product);
                }
            });
            console.log(this.searchQuery);
            //console.log();
        },
    },

    template: '<form name="search" id="search">\n' +
    '            <input type="text" id="queries-value" v-model="searchQuery">\n' +
    '            <button type="submit" value="Поиск" id="search-btn" @click="searchProduct">\n' +
    '                <i class="fa fa-search" aria-hidden="true"></i>\n' +
    '            </button>\n'+
    '</form>',

});