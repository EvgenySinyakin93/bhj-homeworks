// Находим элемент с подсказкой
const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const maxActiveTooltip = 1;

hasTooltip.forEach(hasTooltips => {
   hasTooltips.addEventListener('click', (event) => {
    event.preventDefault();

    //Доваление шаблона
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip_box');

    //Добавление подсказки
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = hasTooltips.getAttribute('title');
    tooltip.classList.add('tooltip_active');
    
   

    //Закрытие подсказки при повторном клике
    const tooltipActive = hasTooltips.querySelectorAll('.tooltip_active');
    if(tooltipActive) {
        tooltipActive.remove();
        return;
    }

    // Запрет на открытие более 1-ой активной подсказки
    const tooltipMuch = document.querySelectorAll('.tooltip');
    if (tooltipMuch.length >= maxActiveTooltip) {
        tooltipMuch[0].remove();
    }

    // Установка позиционирования элемента с подсказкой
    const place = hasTooltips.getBoundingClientRect();
    const placeTop = place.top + window.pageYOffset;
    const placeLeft = place.left + window.pageXOffset;

    tooltip.style.top = placeTop + place.height + 'px';
    tooltip.style.left = placeLeft + 'px';

    hasTooltips.appendChild(tooltip);
   });
});



