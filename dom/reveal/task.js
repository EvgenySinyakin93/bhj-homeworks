// Функция проверки видимости элемента

function elementVisibility(el) {
  let block = el.getBoundingClientRect();
  return (
    block.top >= 0 &&
    block.left >= 0 &&
    block.bottom <= window.innerHeight &&
    block.right <= window.innerWidth
  );
}

// обработчик 
    window.addEventListener('scroll', () => {
        // Получаем блоки
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const reveal = reveals[i];
        //Если мы видим на стр добавляем нужный блок, если нет удаляем
        if(elementVisibility(reveal)){
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    }
    });

