
export default class CreateCard{
    constructor(arr, url, index) {
        this.arr = arr;
        this.url = document.querySelector(url);
        this.index = index;
    }

    init() {
        for (let i = 0; i < this.index; i++) {
            const elem = this.arr[this.randomInteger()];
            const card = this.createCard(elem);
            this.url.insertAdjacentHTML('beforeend', card);
        };
        
    }

    createCard(obj) {
        return `
            <div class="product_card">
                <img class="product_card-img" src="${obj.imgUrl}" alt="${obj.title}" width="360" height="420">
                <div class="product_card-text">
                    <a class="box_title" href="#">${obj.title}</a>
                    <p class="box_text">${obj.text}</p>
                </div>
                <p class="box_price">${obj.price}</p>
                <div class="black">
                    <p class="black_link" data-id="${obj.id}">
                        Add to Cart
                    </p>
                </div>
            </div>
        `
    }

    randomInteger() {
        const min = 0;
        const max = this.arr.length - 1;
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}