document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Примерные данные пользователей 
    const users = [
        { "id": 1, "username": "тест", "password": "12345", "cart": [] },
    ];

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // Ищем пользователя по имени и паролю
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                // Сохраняем данные пользователя в localStorage
                localStorage.setItem('user', JSON.stringify(user));

                // Перенаправляем на страницу аккаунта
                window.location.href = 'account.html';
            } else {
                // Если данные неверные, показываем сообщение об ошибке
                errorMessage.style.display = 'block';
            }
        });
    }
});


