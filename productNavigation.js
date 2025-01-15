document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id')); // Получаем id товара из URL

    if (isNaN(productId)) {
        return;
    }

    const product = products.find(p => p.id === productId); // Ищем товар по id
    if (product) {
        const container = document.getElementById('product-details');
        if (container) {
            container.innerHTML = `
                <div class="product-details">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="info">
                        <h1>${product.name}</h1>
                        <p class="price">Цена: ${product.price} ₽</p>
                        <p>${product.description}</p>
                        <p>В наличии: ${product.stock} шт.</p>
                        <div class="product-buttons">
                            <button class="add-to-cart" onclick="addToCart(${product.id})">Добавить в корзину</button>
                            <button onclick="window.location.href='shop.html'">Назад в магазин</button>
                        </div>
                    </div>
                </div>
            `;
        }
    } else {
        return; 
    }
});
