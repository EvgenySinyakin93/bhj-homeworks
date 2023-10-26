//Создаем переменную с псевдомассивом шрифтов
let fonts = Array.from(document.getElementsByClassName('book__control'));
// Вешаем обработчик для смены шрифта
for (let i = 0; i < fonts.length; i++) {
    fonts[i].addEventListener('click', () => {
        fonts[i].classList.toggle('font-size_active');
    })
}

