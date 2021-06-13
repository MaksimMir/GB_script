import product from './components/product';
import CreateCard from './components/createcard';
import {CartRender} from './components/cart';
import {setItem} from './components/db';
import {Order, Composite} from './components/fast_food';

window.addEventListener('load', () => {
    'use strict';
    
    const clearCart = document.querySelector('.clear');
    const productCard = new CreateCard(product, '.product_list', 6);
    const cart = new CartRender('.cart_place');

    cart.renderCart();
    productCard.init();
    
    const btns = document.querySelectorAll('.black_link');
    
    for (const el of btns) {
        el.addEventListener('click', (evt) => {
            const id = evt.target.dataset.id;
            setItem(id, product[id]);
            cart.renderCart();
        });
    };

    try {        
        clearCart.addEventListener('click', (evt) => {
            evt.preventDefault();
            cart.clearCart();
            cart.renderCart();
        }); 
    } catch (error) {};

    try {
        const products = new Composite();
        document.querySelector('.food').addEventListener('click', () => {
            products.add(new Order().createOrder());
            console.log(`Price = ${products.price}, Calories = ${products.calories}`);
        })
    } catch (error) {}

    
})