//Находим эл переключения, создаем переменную текущего эл-та
function rotateText() {
  const elements = document.querySelectorAll(".rotator__case");
  let currentElement;

  //Удаляем активные эл-ты
  Array.from(elements).forEach((element) => {
    element.classList.remove(".rotator__case_active");
  });

  //Будем проходиться по всем эл-там и переключать их каждую секунду
  elements.forEach((elements2, index) => {
    if (index === 0) {
      currentElement = elements2;
      return;
    }
    setTimeout(() => {
      elements2.parentNode.insertBefore(currentElement, elements2);
      elements2.classList.add("rotator__case_active");
      currentElement.classList.remove("rotator__case_active");
    }, 1000 * (index - 1));
  });
}

setInterval(rotateText, 1000);
