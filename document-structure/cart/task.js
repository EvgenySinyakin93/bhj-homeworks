const productCard = document.querySelector('.cart__products');
const productAdd = document.querySelectorAll('.product__add');
const productDelete = document.querySelectorAll('.product__delete');
const productControl = document.querySelectorAll('.product__quantity-controls');


//Управление + и -
productControl.forEach(control => {
    const buttonAddValue = control.querySelector('.product__quantity-control_inc');
    const buttonRemoveValue = control.querySelector('.product__quantity-control_dec');
    let productQuantityValue = control.querySelector('.product__quantity-value');

    buttonAddValue.addEventListener('click', () => {
        productQuantityValue.textContent = parseInt(productQuantityValue.textContent) + 1;
    });

    buttonRemoveValue.addEventListener('click', () => {
        productQuantityValue.textContent = parseInt(productQuantityValue.textContent) - 1;
        if (productQuantityValue.textContent <= 1) {
            productQuantityValue.textContent = 1;
        }
    });
})

// Добавление продукта в корзину при клике на кнопку
productAdd.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').src;
        const productCount = parseInt(product.querySelector('.product__quantity-value').textContent);

        let cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
        if(cartProduct) {
            let cartProductCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent) + productCount;
            cartProduct.querySelector('.cart__product-count').textContent = cartProductCount;
        } else {
            cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productCount}</div>
            `;
            document.querySelector('.cart__products').appendChild(cartProduct);
        }
    });
});

// Удаление продукта в корзину при клике на кнопку
    productDelete.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const productId = product.dataset.id;
            const productCount = parseInt(product.querySelector('.product__quantity-value').textContent);
            let cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
            if(cartProduct) {
                let cartProductCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent);
                cartProductCount -= productCount;
                if (cartProductCount > 0) {
                    cartProduct.querySelector('.cart__product-count').textContent = cartProductCount;
                } else {
                    cartProduct.remove();
                }
            }
        });
    });

