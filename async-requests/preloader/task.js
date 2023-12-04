const loader = document.getElementById("loader");
const items = document.getElementById("items");

//создаем запрос
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.onload = function () {
  if ((xhr.readyState = xhr.DONE)) {
    if (xhr.status >= 400) {
      setTimeout(() => {
        return console.log("Ошибка загрузки данных" + this.response.status);
      }, 1000);
    }

    if (xhr.status === 200) {
      //преобразовываем полученные данные для js
      const response = JSON.parse(this.responseText);
      const valutes = response.response.Valute;
      console.log(valutes);

      //cоздаем разметку для айтемс
      for (const valute in valutes) {
        const value = Number(valutes[valute].Value).toFixed(2);
        const item = createHTML(valute, value);
        items.appendChild(item);
      }
      loader.classList.remove("loader_active");
    }
  }
};
xhr.send();

//функция для создания разметки айтемс
function createHTML(valute, value) {
  const div = document.createElement("div");
  div.classList.add("item");

  div.innerHTML += `
    <div class="item__code">${valute}</div>
    <div class="item__value">${value}</div>
    <div class="item__currency">руб.</div>
    `;
  return div;
}
