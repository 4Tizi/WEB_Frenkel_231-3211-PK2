const users = [
    { "id": 1, "username": "тест", "password": "12345", "cart": [] }
];

const products = [
    { 
        "id": 1, 
        "name": "Быстрое зарядное устройство", 
        "price": 1999, 
        "description": "Это зарядное устройство предназначено для тех, кто ценит скорость и удобство. С мощностью 20 Вт оно обеспечивает мгновенную зарядку устройств, поддерживающих технологии Quick Charge и Power Delivery. Идеально подходит для современных смартфонов, планшетов, ноутбуков с портом USB-C. Устройство имеет компактный и легкий корпус, что делает его идеальным для использования дома, в офисе и в путешествиях. Защита от перенапряжения и перегрева гарантирует безопасность ваших устройств. Уникальный дизайн корпуса препятствует скольжению, а высококачественные материалы обеспечивают долговечность.", 
        "image": "images/1.jpg", 
        "stock": 10 
    },
    { 
        "id": 2, 
        "name": "Беспроводное зарядное устройство", 
        "price": 2999, 
        "description": "Освободитесь от проводов и наслаждайтесь комфортом. Это беспроводное зарядное устройство поддерживает стандарт Qi и обеспечивает мощность до 15 Вт, позволяя быстро и эффективно заряжать смартфоны, смарт-часы и наушники. Стильный ультратонкий дизайн прекрасно впишется в интерьер вашего дома или офиса. Зарядное устройство оснащено антискользящим покрытием, а индикатор состояния зарядки подскажет, когда ваш гаджет полностью заряжен. Максимальное расстояние зарядки до 8 мм позволяет заряжать устройство, не снимая защитный чехол.", 
        "image": "images/2.jpg", 
        "stock": 5 
    },
    { 
        "id": 3, 
        "name": "Автомобильное зарядное устройство", 
        "price": 1499, 
        "description": "Идеальное решение для автомобилистов, которые всегда в движении. Это зарядное устройство имеет два порта USB с общей мощностью 18 Вт, что позволяет заряжать два устройства одновременно. Компактный и эргономичный дизайн обеспечивает удобство подключения даже в ограниченном пространстве. Защита от короткого замыкания и перегрева гарантирует безопасность вашего автомобиля и подключенных устройств. Светодиодный индикатор показывает состояние работы устройства, а высококачественные материалы корпуса обеспечивают долговечность даже при интенсивном использовании.", 
        "image": "images/3.jpg", 
        "stock": 15 
    },
    { 
        "id": 4, 
        "name": "Зарядное устройство для ноутбуков", 
        "price": 3499, 
        "description": "Универсальное зарядное устройство мощностью 65 Вт, предназначенное для современных ноутбуков, включая модели с портом USB-C. Интеллектуальная система управления автоматически подстраивает напряжение, что позволяет безопасно заряжать устройства различной мощности. Корпус выполнен из огнеупорных материалов, что гарантирует дополнительную защиту. Зарядное устройство поставляется с адаптерами для разных разъемов, что делает его совместимым с широким спектром устройств. Его легкий вес и компактные размеры делают его удобным для путешествий и работы в любом месте.", 
        "image": "images/4.jpg", 
        "stock": 7 
    },
    { 
        "id": 5, 
        "name": "Солнечное зарядное устройство", 
        "price": 4499, 
        "description": "Идеальный выбор для путешественников, которые ценят автономность и экологичность. Это устройство оснащено солнечной панелью мощностью 10 Вт и встроенным аккумулятором емкостью 8000 мАч, который позволяет заряжать устройства даже в условиях ограниченного доступа к электричеству. Корпус устройства водонепроницаемый и устойчив к пыли, что делает его идеальным для использования на природе. Оно оснащено двумя USB-портами для одновременной зарядки нескольких устройств. Интеллектуальная система зарядки автоматически определяет оптимальный ток для подключенного устройства.", 
        "image": "images/5.jpg", 
        "stock": 8 
    },
    { 
        "id": 6, 
        "name": "Зарядное устройство для планшетов", 
        "price": 2599, 
        "description": "Специально разработано для планшетов, это устройство обеспечивает мощность до 25 Вт и оснащено портами USB-C и Lightning. Оно совместимо с большинством современных планшетов, включая устройства Apple и Android. Высокая скорость зарядки позволяет за короткое время восстановить полный заряд вашего планшета, что особенно важно для работы и развлечений. Компактный дизайн и защита от перегрева делают устройство удобным и безопасным для использования в любых условиях. Дополнительная система охлаждения гарантирует стабильную работу даже при длительном использовании.", 
        "image": "images/6.jpg", 
        "stock": 6 
    },
    { 
        "id": 7, 
        "name": "Мобильная зарядка с дополнительной батареей", 
        "price": 3199, 
        "description": "Эта мобильная зарядка сочетает в себе функции зарядного устройства и портативного аккумулятора емкостью 10 000 мАч. Она поддерживает технологии быстрой зарядки Power Delivery и Quick Charge, что позволяет заряжать устройства в кратчайшие сроки. Компактный корпус оснащен светодиодным индикатором уровня заряда, что позволяет легко контролировать оставшуюся емкость. Устройство имеет два порта USB и один USB-C, обеспечивая универсальную совместимость. Это идеальный выбор для путешествий и деловых поездок.", 
        "image": "images/7.jpg", 
        "stock": 10 
    },
    { 
        "id": 8, 
        "name": "Мини-зарядное устройство", 
        "price": 999, 
        "description": "Компактное и легкое зарядное устройство размером 6x4 см идеально подходит для путешествий. Оно обеспечивает мощность до 12 Вт и совместимо с большинством современных устройств с USB-портом. Устройство выполнено из высококачественных материалов и оснащено системой защиты от перегрева, короткого замыкания и перенапряжения. Идеальный выбор для тех, кто ценит удобство и мобильность.", 
        "image": "images/8.jpg", 
        "stock": 12 
    },
    { 
        "id": 9, 
        "name": "Быстрое автомобильное зарядное устройство", 
        "price": 1999, 
        "description": "Сверхскоростное автомобильное зарядное устройство, идеально подходящее для тех, кто проводит много времени за рулем. Мощность устройства составляет до 30 Вт, что позволяет заряжать устройства с поддержкой Quick Charge 3.0 в минимальные сроки. Оснащено двумя портами USB, включая один USB-C, для одновременной зарядки нескольких гаджетов. Корпус изготовлен из алюминия, что обеспечивает долговечность и устойчивость к нагреву. Устройство имеет светодиодный индикатор работы, который не отвлекает во время ночной езды.", 
        "image": "images/9.jpg", 
        "stock": 9 
    },
    { 
        "id": 10, 
        "name": "Зарядное устройство с несколькими портами", 
        "price": 2499, 
        "description": "Это мощное зарядное устройство с шестью портами USB станет незаменимым помощником в семье или офисе. Общая мощность устройства составляет 60 Вт, что позволяет заряжать одновременно несколько устройств, включая смартфоны, планшеты, наушники и фитнес-трекеры. Технология интеллектуального распределения мощности автоматически определяет оптимальный ток для каждого подключенного устройства. Компактный дизайн с антискользящими ножками гарантирует устойчивость на любых поверхностях. Устройство оснащено системой защиты от перегрева и скачков напряжения.", 
        "image": "images/10.jpg", 
        "stock": 14 
    },
    { 
        "id": 11, 
        "name": "Кабель для зарядки Type-C", 
        "price": 599, 
        "description": "Высококачественный кабель для зарядки с разъемом Type-C длиной 1,5 метра. Поддерживает скорость передачи данных до 480 Мбит/с и мощность зарядки до 60 Вт. Идеально подходит для зарядки современных смартфонов, планшетов и ноутбуков. Кабель выполнен из прочного нейлонового материала, что предотвращает износ и перекручивание. Усиленные разъемы гарантируют долговечность даже при интенсивном использовании. Совместим с большинством устройств, поддерживающих USB-C.", 
        "image": "images/11.jpg", 
        "stock": 20 
    },
    { 
        "id": 12, 
        "name": "Зарядка для смарт-часов", 
        "price": 799, 
        "description": "Компактное и стильное зарядное устройство, предназначенное специально для смарт-часов. Оно оснащено магнитной поверхностью, которая надежно удерживает часы во время зарядки. Устройство поддерживает большинство популярных моделей, включая Apple Watch, Samsung Galaxy Watch и другие. Индикатор заряда позволяет легко отслеживать процесс зарядки. Кабель длиной 1 метр обеспечивает удобство использования, а защита от короткого замыкания гарантирует безопасность ваших гаджетов.", 
        "image": "images/12.jpg", 
        "stock": 13 
    },
    { 
        "id": 13, 
        "name": "Зарядное устройство для аккумуляторов", 
        "price": 12999, 
        "description": "Многофункциональное зарядное устройство для аккумуляторов различных типов, включая AA, AAA, 18650, и другие. Поддерживает интеллектуальную систему зарядки, которая автоматически определяет тип батареи и подстраивает мощность для безопасной и эффективной зарядки. Устройство оснащено ЖК-экраном, который отображает уровень заряда каждого аккумулятора. Дополнительные функции включают защиту от перезаряда, перегрева и короткого замыкания. Корпус выполнен из огнеупорного материала, что делает его безопасным даже при длительном использовании.", 
        "image": "images/13.jpg", 
        "stock": 5 
    }
];

// Проверка авторизации
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname; // Получаем путь текущей страницы
            const container = document.getElementById('product-container');
            if (container) {
                container.innerHTML = products.map(product => 
                    `<div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price} ₽</p>
                        <div class="product-buttons">
                            <!-- Привязка ID товара через атрибут data-id -->
                            <button class="view-details" data-id="${product.id}">Перейти к описанию</button>
                            <button class="add-to-cart" onclick="addToCart(${product.id})">Добавить в корзину</button>
                        </div>
                    </div>`).join('');

                // Обработчики событий для кнопок "Перейти к описанию"
                const buttons = container.querySelectorAll('.view-details');
                buttons.forEach(button => {
                    button.addEventListener('click', (event) => {
                        const productId = parseInt(event.target.getAttribute('data-id'));
                        window.location.href = `product.html?id=${productId}`; // Переход на страницу с описанием товара
                    });
                });
            } else {
                console.error("Контейнер для товаров не найден.");
            }
});

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === productId);

        if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} добавлен в корзину!`);
        updateCartDisplay(); // Обновляем корзину
    } else {
        console.error("Товар не найден: ", productId);
    }
}


// Функция для удаления товара из корзины
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId); // Удаляем товар с заданным ID
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Товар удален из корзины.');
    updateCartDisplay(); // Обновляем отображение корзины, если это нужно
}

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user')); // Получаем пользователя из localStorage

    // Логика для смены текста на кнопке "Войти" на "Аккаунт"
    const loginLink = document.getElementById('login-link');
    if (user) {
        loginLink.textContent = 'Аккаунт';
        loginLink.href = 'account.html'; // Переход на страницу аккаунта
    } else {
        loginLink.textContent = 'Войти';
        loginLink.href = 'login.html'; // Переход на страницу входа
    }
});


