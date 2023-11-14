//Находим элементы
const controls = document.querySelector(".book__controls");
const book = document.getElementById("book");

//Вешаем обработчики
controls.addEventListener("click", function (event) {
  event.preventDefault; //отмена стандарта

  const { size, textColor, bgColor } = event.target.dataset; //делегирование событий
  //   Свойство dataset позволяет считывать или устанавливать любые дата-атрибуты на HTML-элементе.

  const elementClassArray = event.target.classList;
  const activeControl = event.target
    .closest(".book__control")
    .querySelectorAll("a"); //вместо того, чтобы назначать обработчик каждому, мы ставим один обработчик на их общего предка.

  activeControl.forEach((element) => {
    element.classList.remove(elementClassArray[0] + "_active"); //проходимся по элементам в поисках неактивных
  });

  event.target.classList.add(elementClassArray[0] + "_active"); //добавляем активные

  function removeBookClassName(className) {
    for (value of book.classList) {
      if (value.includes(className)) {
        book.classList.remove(value);
      }
    }
  }

  //Работа с цветами
  if (size || event.target.className === "font-size font-size_active") {
        removeBookClassName("book_fs-");
        book.classList.add("book_fs-" + size);
      }
    
      if (textColor) {
        removeBookClassName("book_color-");
        book.classList.add("book_color-" + textColor);
      }
    
      if (bgColor) {
        removeBookClassName("book_bg-");
        book.classList.add("book_bg-" + bgColor);
      }
});

