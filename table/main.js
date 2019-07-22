'use strict';

const products = [
    {
        name: 'Футболка Mango LifeStyle',
        article: 1,
        price: 3000,
        quantity: 0,
        category: 't-shirt',
        brand: 'mango',
        sex: 'female',
        size: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
        color: ['white', 'black', 'red', 'green', 'blue'],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: false,
    },
    {
        name: 'Брюки Lacoste',
        article: 2,
        price: 8000,
        quantity: 0,
        category: 'pants',
        brand: 'lacoste',
        sex: 'male',
        size: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
        color: ['white', 'black', 'red', 'green', 'blue'],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: false,
    },
    {
        name: 'Шорты Ostin',
        article: 3,
        price: 1500,
        quantity: 0,
        category: 'shorts',
        brand: 'ostin',
        sex: 'male',
        size: ['s', 'm', 'l', 'xl', 'xxl'],
        color: ['red', 'green', 'blue'],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: false,
    },
    {
        name: 'Рубашка Lacoste',
        article: 4,
        price: 5500,
        quantity: 0,
        category: 'shirt',
        brand: 'lacoste',
        sex: 'male',
        size: ['s', 'm', 'l', 'xl', 'xxl'],
        color: ['white', 'blue'],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: false,

    },
    {
        name: 'Тостовка City',
        article: 5,
        price: 9999,
        quantity: 0,
        category: 'sweatshirt',
        brand: 'Armani',
        sex: 'female',
        size: ['xxs', 'xs', 's', 'm',],
        color: ['black', 'purple'],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: false,
    },
    {
        name: 'Брюки Zara',
        article: 6,
        price: 4000,
        quantity: 0,
        category: 'pants',
        brand: 'zara',
        sex: 'unisex',
        size: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
        color: ['black',],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: false,

    },
    {
        name: 'Брюки Street style',
        article: 7,
        price: 5000,
        quantity: 0,
        category: 'pants',
        brand: 'mango',
        sex: 'female',
        size: ['xxs', 'xs', 's', 'm',],
        color: ['white', 'black', 'blue'],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: false,
    },
    {
        name: 'Футболка Black Diamond',
        article: 8,
        price: 1100,
        quantity: 0,
        category: 't-shirt',
        brand: 'lacoste',
        sex: 'female',
        size: ['xxs', 'xs', 's', 'm',],
        color: ['white', 'black', 'red', 'green', 'blue'],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: true,

    },
    {
        name: 'Футболка Zara',
        article: 9,
        price: 3500,
        quantity: 0,
        category: 't-shirt',
        brand: 'zara',
        sex: 'unisex',
        size: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
        color: ['white', 'black',],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: false,
    },
    {
        name: 'Ремень',
        article: 10,
        price: 4000,
        quantity: 0,
        category: 'accessories',
        brand: 'lacoste',
        sex: 'male',
        size: ['l', 'xl', 'xxl'],
        color: ['blue'],
        description: 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.',
        sale: false,

    },
];

const table = {
    init() {
        this.buildTable();
    },

    buildTable() {
      const tableHead = document.getElementById('tableHead');
      const tableBody = document.getElementById('tableBody');

      // создаем ячейки для шапки таблицы и заполняем названиями
      for (let i = 0; i < 1; i++) {
          const tableHeadRow = document.createElement('tr');
          for (let value in products[i]){
              const tableCol = document.createElement('td');
              tableCol.setAttribute('scope', 'col');
              tableCol.textContent = value;

              tableHeadRow.appendChild(tableCol);
          }

          tableHead.appendChild(tableHeadRow);
      }

      for ( let i = 0; i < products.length; i++) {
          const tableBodyRow = document.createElement('tr');

          for (let value in products[i]) {
              const tableCol = document.createElement('td');
              tableCol.textContent = products[i][value];
              tableBodyRow.appendChild(tableCol);
          }

          tableBody.appendChild(tableBodyRow);
      }
    },

    clearTable() {
        const tableHead = document.getElementById('tableHead');
        const tableBody = document.getElementById('tableBody');
        tableHead.removeChild(tableHead.children[0]);
        console.log();
        for (let i = products.length; i > 0; i--) {
            tableBody.removeChild(tableBody.children[i-1]);
        }

    },

    sortPriceUp() {
        this.clearTable();

        products.sort((a,b) => {return a.price - b.price});

        this.buildTable();
    },

    sortPriceDown() {
        this.clearTable();

        products.sort((a,b) => {return b.price - a.price});

        this.buildTable();
    },

    sortNameUp() {
        this.clearTable();
        function compareName(a,b) {
            if(a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            }
        }
        products.sort(compareName);

        this.buildTable();
    },

    sortNameDown() {
        this.clearTable();
        function compareName(a,b) {
            if(a.name < b.name) {
                return 1;
            } else if (a.name > b.name) {
                return -1;
            }
        }
        products.sort(compareName);

        this.buildTable();
    },

    searchQuery(query) {
      this.clearTable();

        const tableHead = document.getElementById('tableHead');
        const tableBody = document.getElementById('tableBody');

        // создаем ячейки для шапки таблицы и заполняем названиями
        for (let i = 0; i < 1; i++) {
            const tableHeadRow = document.createElement('tr');
            for (let value in products[i]){
                const tableCol = document.createElement('td');
                tableCol.setAttribute('scope', 'col');
                tableCol.textContent = value;

                tableHeadRow.appendChild(tableCol);
            }

            tableHead.appendChild(tableHeadRow);
        }

        const tableBodyRow = document.createElement('tr');

        for (let i = 0; i < products.length; i++){
            if(query === products[i].article || query === products[i].price || query === products[i].name || query === products[i].sex){
                const tableBodyRow = document.createElement('tr');

                for(let key in products[i]){
                    const tableCol = document.createElement('td');
                    tableCol.textContent = products[i][key];
                    tableBodyRow.appendChild(tableCol);
                }
                tableBody.appendChild(tableBodyRow);
            }
        }


    },
};

window.addEventListener('load', () => {table.init();});