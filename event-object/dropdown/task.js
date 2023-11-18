//сверни разверни

const button = document.querySelector(".dropdown__value");
const listItems = document.querySelectorAll(".dropdown__list");

button.addEventListener("click", () => {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("dropdown__list_active");
  }
});

//замена пункта при выборе
document.querySelectorAll(".dropdown__item").forEach((item) => {
  item.addEventListener("click", function () {
    event.preventDefault();
    const dropdown = event.currentTarget.closest(".dropdown");
    const value = event.currentTarget.textContent;

    dropdown.querySelector(".dropdown__value").textContent = value;
    listItems[0].classList.toggle("dropdown__list_active");
  });
});
