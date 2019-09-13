/**
 * Компонент поиска
 */
Vue.component('search', {
    props: ['filter', 'catalog'],
    data(){return {
        searchQuery: '',
    };
    },

    methods: {
        searchProduct() {
            event.preventDefault();
            let regexp = new RegExp(this.searchQuery, 'ig');
            this.$root.filterProducts = this.$root.catalogProducts.filter(item => regexp.test(item.product_name));

        },
    },

    template: '<form name="search" id="search">\n' +
    '            <input type="text" id="queries-value" v-model="searchQuery">\n' +
    '            <button type="submit" value="Поиск" id="search-btn" @click="searchProduct" >\n' +
    '                <i class="fa fa-search" aria-hidden="true"></i>\n' +
    '            </button>\n'+
    '</form>',

});

/**
 * Компонент
 */