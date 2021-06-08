import product from './components/product';
import CreateCard from './components/createcard';

window.addEventListener('load', () => {
    'use strict';

    new CreateCard(product, '.product_list', 6).init();

    const btns = document.querySelectorAll('.black_link');
    for (const el of btns) {
        el.addEventListener('click', (evt) => {
            const id = evt.target.dataset.id;
            console.log(product[id]);
        })
    }
    

})