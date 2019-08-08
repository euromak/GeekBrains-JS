'use script';

const data = [
    {id: 1, brand: 'weishaupt', model: 'wg-5', category: 'burn', fuel: 'gas', url: 'http://www.wg-5.ru/'},
    {id: 2, brand: 'weishaupt', model: 'wg-10', category: 'burn', fuel: 'gas', url: 'http://www.wg10.ru/'},
    {id: 3, brand: 'weishaupt', model: 'wg-20', category: 'burn', fuel: 'gas', url: 'http://www.wg20.ru/'},
    {id: 4, brand: 'weishaupt', model: 'wg-5', category: 'burn', fuel: 'gas', url: 'http://www.wg10.ru/'},
    {id: 5, brand: 'weishaupt', model: 'wg-5', category: 'burn', fuel: 'gas', url: 'http://www.wg10.ru/'},
    {id: 6, brand: 'elco', model: 'nextron', category: 'burn', fuel: 'gas', url: 'http://www.wg10.ru/'},
    {id: 7, brand: 'elco', model: 'vectron', category: 'burn', fuel: 'gas', url: 'http://www.wg10.ru/'},
    {id: 8, brand: 'baltur', model: 'btl', category: 'burn', fuel: 'diesel', url: 'http://www.wg10.ru/'},
    {id: 9, brand: 'weishaupt', model: 'wl-20', category: 'burn', fuel: 'diesel', url: 'http://www.wl20.ru/'},

];

class Table {
    constructor(name, url, container = '.container') {
        this.name = name;
        this.items = [];
        this.container = document.querySelector(container);
        this.table = 'table';
        this.row = 'row';
        this.col = 'col';
        this.url = url;
        this.init();
    }

    fetchJson(url) {
        return fetch(url).then(result => result.json()).catch(error => console.log(error));
    }

    handlerData(data) {
        let arr = data.filter(brand => brand.name === this.name);
        this.items = [...arr];
    }

    render() {
        this.container.insertAdjacentHTML('beforeend', )
    }

    init() {
        this.fetchJson(this.url).then(data => this.handlerData(data));
    }
}


class TableItem {
    constructor(element) {
        this.element = element;
        this.model = element.model;


    }

    render() {

    }


}
let weishaupt = new Table('weishaupt', 'data.json');





