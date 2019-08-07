'use script';

class Table {
    constructor(name, url, container = 'container') {
        this.name = name;
        this.items = [];
        this.container = container;
        this.url = url;
        this.init();
    }

    fetchJson(url) {
        console.log(url);
        return fetch(url).then(result => result.json()).catch(error => console.log(error));
    }

    render() {

    }

    init() {
        this.fetchJson(this.url).then(data => console.log(data));
    }
}

let weishaupt = new Table('weishaupt', 'data.json');

console.log(weishaupt);