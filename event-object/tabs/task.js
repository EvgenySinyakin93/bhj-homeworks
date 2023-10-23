//Создаем переменные с псевдомассивами вкладок и их контента
let tab = Array.from(document.getElementsByClassName("tab"));
let content = Array.from(document.getElementsByClassName("tab__content"));

//Удаление активной вкладки
function removeTab() {
  let element1 = tab.find((items) => items.classList.contains("tab_active"));
  element1.classList.remove("tab_active");
}

//Удаление активного контента
function removeContent(){
    let element2 = content.find((items) => items.classList.contains("tab__content_active"));
    element2.classList.remove("tab__content_active");
}

//Вешаем обработчик для смены вкладок
for (let i =0; i < tab.length; i++) {
    tab[i].addEventListener("click", () => {
        removeTab();
        removeContent();
        tab[i].classList.add("tab_active");
        content[i].classList.add("tab__content_active");
    })
}