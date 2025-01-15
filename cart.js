document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const totalPriceElem = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');
    const resetButton = document.getElementById('reset-button');
    const clearCartButton = document.getElementById('clear-cart-button');
    const pickupForm = document.getElementById('pickup-form');
    const deliveryForm = document.getElementById('delivery-form');
    const deliveryTimeInput = document.getElementById('delivery-time');
    const errorMessage = document.getElementById('error-message');
    const loginLink = document.getElementById('login-link');
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        loginLink.textContent = 'Аккаунт';
        loginLink.href = 'account.html'; // Переход на страницу аккаунта
    } else {
        loginLink.textContent = 'Войти';
        loginLink.href = 'login.html'; // Переход на страницу входа
    }

    function renderCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartContainer.innerHTML = '';
        let totalPrice = 0;
    
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Корзина пуста</p>';
            totalPriceElem.textContent = '0 ₽';
            return;
        }
    
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
    
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>${item.price} ₽ x ${item.quantity}</p>
                    <p>Сумма: ${item.price * item.quantity} ₽</p>
                    <button class="remove-item" data-id="${item.id}">Удалить</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });
    
        totalPriceElem.textContent = `${totalPrice} ₽`;
    
        // Обработка удаления товара из корзины
        const removeButtons = cartContainer.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = parseInt(button.dataset.id, 10);
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart = cart.filter(item => item.id !== itemId); // Удаляем товар из корзины
                localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем обновленную корзину
                renderCart(); // Перерисовка корзины
            });
        });
    }
    

    // Обработка изменения выбора способа получения
    const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
    deliveryRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'pickup') {
                pickupForm.style.display = 'block';
                deliveryForm.style.display = 'none';
            } else if (radio.value === 'delivery') {
                pickupForm.style.display = 'none';
                deliveryForm.style.display = 'block';
            }
        });
    });

    // Оформление заказа
    checkoutButton.addEventListener('click', () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            alert('Пожалуйста, авторизуйтесь, чтобы оформить заказ.');
            window.location.href = 'login.html';
            return;
        }

        const deliveryType = document.querySelector('input[name="delivery"]:checked').value;
        let userDetails = '';
        let isValid = true;

        if (deliveryType === 'pickup') {
            const pickupName = document.getElementById('pickup-name').value;
            const pickupPhone = document.getElementById('pickup-phone').value;
            const pickupEmail = document.getElementById('pickup-email').value;

            if (!pickupName || !pickupPhone || !pickupEmail) {
                isValid = false;
            }

            if (isValid) {
                const pickupAddress = document.getElementById('pickup-address').value;
                userDetails = `Самовывоз. Ваши данные: ФИО: ${pickupName}, Телефон: ${pickupPhone}, Email: ${pickupEmail}, Адрес магазина: ${pickupAddress}`;
            }

        } else if (deliveryType === 'delivery') {
            const deliveryName = document.getElementById('delivery-name').value;
            const deliveryPhone = document.getElementById('delivery-phone').value;
            const deliveryEmail = document.getElementById('delivery-email').value;
            const deliveryAddress = document.getElementById('delivery-address').value;
            const deliveryTime = document.getElementById('delivery-time').value;

            if (!deliveryName || !deliveryPhone || !deliveryEmail || !deliveryAddress || !deliveryTime || errorMessage.style.display === 'block') {
                isValid = false;
            }

            if (isValid) {
                userDetails = `Доставка. Ваши данные: ФИО: ${deliveryName}, Телефон: ${deliveryPhone}, Email: ${deliveryEmail}, Адрес: ${deliveryAddress}, Время доставки: ${deliveryTime}`;
            }
        }

        if (isValid) {
            alert(userDetails);
            
            // Сохраняем заказ пользователя
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            const order = {
                id: Date.now(), // Генерация уникального ID заказа
                userId: user.id,
                totalPrice,
                deliveryType,
                details: userDetails
            };

            let userOrders = JSON.parse(localStorage.getItem(`orders_${user.id}`)) || [];
            userOrders.push(order);
            localStorage.setItem(`orders_${user.id}`, JSON.stringify(userOrders));

            // Очистка корзины после оформления заказа
            localStorage.removeItem('cart');
            renderCart();
        } else {
            alert('Пожалуйста, заполните все поля корректно.');
        }
    });

    // Сброс формы
    resetButton.addEventListener('click', (event) => {
        event.preventDefault();

        const formElements = document.querySelectorAll('input, select');
        formElements.forEach(element => {
            if (element.type === 'radio') {
                element.checked = false;
            } else {
                element.value = '';
            }
        });

        errorMessage.style.display = 'none';

        renderCart();

        const pickupRadioButton = document.querySelector('input[name="delivery"][value="pickup"]');
        pickupRadioButton.checked = true;

        pickupForm.style.display = 'block';
        deliveryForm.style.display = 'none';
    });

    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        renderCart();
    });

    const pickupRadioButton = document.querySelector('input[name="delivery"][value="pickup"]');
    pickupRadioButton.checked = true;
    pickupForm.style.display = 'block';
    deliveryForm.style.display = 'none';

    renderCart();
});


