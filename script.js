// Переключение темы
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  document.body.classList.toggle('theme-light');
});

// Имитация подключения (пока без бэкенда)
document.querySelectorAll('.connect-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const platform = this.closest('.card').dataset.platform;
    alert(`Подключение к ${platform.toUpperCase()} — скоро будет!`);
  });
});

// Отправка поста
document.getElementById('sendBtn').addEventListener('click', () => {
  const text = document.getElementById('postText').value.trim();
  if (!text) {
    alert('Братишка, напиши хоть что-то!');
    return;
  }
  alert('Пост улетел братве! 🚀\n(В демо-режиме, конечно)');
});
