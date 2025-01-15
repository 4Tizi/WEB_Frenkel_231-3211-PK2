document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));  // Десериализация

    if (!user) {
        // Если пользователь не авторизован, перенаправлениена страницу входа
        window.location.href = 'login.html';
        return;
    }

    // Отображаем имя пользователя
    const userNameElem = document.getElementById('user-name');
    userNameElem.textContent = user.username;

    // Загружаем и отображаем заказы пользователя
    const userOrders = JSON.parse(localStorage.getItem(`orders_${user.id}`)) || [];
    const ordersContainer = document.getElementById('orders-container');
    if (userOrders.length === 0) {
        ordersContainer.innerHTML = '<p>У вас нет оформленных заказов.</p>';
    } else {
        ordersContainer.innerHTML = userOrders.map(order => 
            `<div class="order-item">
                <p>Заказ №${order.id}</p>
                <p>Сумма: ${order.totalPrice} ₽</p>
                <p>Тип доставки: ${order.deliveryType}</p>
                <p>Детали: ${order.details}</p>
            </div>`).join('');
    }

    // Логика выхода
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', () => {
        // Удаляем данные из localStorage при выходе
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    });

    // Логика очистки заказов
    const clearOrdersButton = document.getElementById('clear-orders-button');
    clearOrdersButton.addEventListener('click', () => {
        // Удаляем заказы пользователя из localStorage
        localStorage.removeItem(`orders_${user.id}`);
        ordersContainer.innerHTML = '<p>Заказы успешно удалены.</p>';
    });
});

