  
class Hamburger{
    constructor(size, filling, sauce) {
        this.size = size;
        this.filling = filling;
        this.sauce = sauce;
    }
}

class Order{
    createOrder() {
        const size = prompt('Hamburger Size: Smal - 1  Big - 2');
        const filling = prompt('Hamburger fillings: Chese - 1 Salat - 2 Batata - 3');
        const sauce = prompt('Hamburger sauce: Paprica - 1 Maionese - 2');

        const product = new Hamburger(size, filling, sauce);

        return product;
    }
}

class Composite{
    constructor() {
        this.items = [];
        
    }

    add(obj) {
        for (const key in obj) {           
            const el = product[key][obj[key]];

            if (el) this.items.push(el);           
        }
    }

    get price() {
        return this.items.reduce((p, e) => p + e.price, 0);
    }

    get calories() {
        return this.items.reduce((p, e) => p + e.calories, 0);
    }
}

const product = {
    size: [
        {
            price: 50,
            calories: 20
        },
        {
            price: 100,
            calories: 40
        }
    ],
    filling: [
        {
            price: 10,
            calories: 20
        },
        {
            price: 20,
            calories: 5
        },
        {
            price: 15,
            calories: 10
        }
    ],
    sauce: [
        {
            price: 15,
            calories: 0
        },
        {
            price: 20,
            calories: 5
        }
    ]
};

export{Order, Composite};