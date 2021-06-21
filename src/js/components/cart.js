import {getItem} from './db';

export class CartRender{
    constructor(parent) {
        try {
            this.parent = document.querySelector(parent);
            this.cart = this.parent.firstElementChild.firstElementChild;
        } catch (error) {}
    }

    renderCart() {
        try {
            this.cart.innerHTML = '';
            let sum = 0;
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const element = getItem(key);
                sum += +element.price.slice(1);

                this.cart.insertAdjacentHTML('afterbegin', this.createCard(element));                
            } 

            this.getPrice(sum);
        } catch (error) {};
        
        try {
            const closeButtons = this.cart.querySelectorAll('.cart_box-close');
            for (const btn of closeButtons) {
                btn.addEventListener('click', evt => {
                    const target = evt.target.dataset.number;
                    this.clearProduct(target);
                })
            }
        } catch (error) {}

        
        
    }

    createCard(elem) {
        return `
            <div class="cart_box row">
                <img class="cart_box-img" src="${elem.imgUrl}" alt="${elem.title} image">
                <div class="cart_box-content">
                    <p class="cart_box-brand">${elem.title}</p>
                    <p class="cart_box-category">${elem.title}</p>
                    <ul class="cart_box-values">
                        <li>Price:<span class="cart_box-item price">${elem.price}</span></li>
                        <li>Color:<span class="cart_box-item color">Red</span></li>
                        <li>Size:<span class="cart_box-item size">XL</span></li>
                        <li>Quantity:
                            <input type="number" class="cart_box-item quantity" min="1" value="1">
                        </li>
                    </ul>
                    <button class="cart_box-close" data-number="${elem.id}">
                        &#10005;
                    </button>
                </div>
            </div>
        `;
    }

    clearProduct(target) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) == target) {
                localStorage.removeItem(target);
                this.renderCart();
                this.getPrice();
            };          
        }       
    }

    clearCart() {
        localStorage.clear();  
    }

    getPrice(sum) {
        try {
            const price = this.parent.querySelector('.cart_check-grandtotal span');
            price.innerHTML = sum;
        } catch (error) {};
    }
}
