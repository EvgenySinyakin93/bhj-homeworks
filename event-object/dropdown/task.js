//сверни разверни 

const button = document.getElementById("button");
const listItems = document.querySelectorAll(".dropdown__list");

button.addEventListener("click", () => {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("dropdown__list_active");
  }
});

//замена пункта при выборе
document.querySelectorAll(".dropdown__item").forEach(item => {
    item.addEventListener("click", function() {
      const dropdown = this.closest(".dropdown");
      const value = this.textContent;
  
      dropdown.querySelector(".dropdown__value").innerText = value;
      dropdown.querySelector(".dropdown__item").style.display = "flex";
        });
  });