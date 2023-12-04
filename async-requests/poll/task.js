const pollAnswers = document.getElementById("poll__answers");

//создаем запрос
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.addEventListener("load", function () {
  if (xhr.readyState === xhr.DONE) {
    // Если запрос завершился ошибкой 400+
    if (xhr.status >= 400) {
      setTimeout(() => {
        return console.log("Ошибка загрузки данных о вопросе");
      }, 1000);
    }

    if (xhr.status === 200) {
      //преобразовываем полученные данные для js
      const response = JSON.parse(this.responseText);
      const poolTitleText = response.data.title;
      const poolAnswersText = response.data.answers;

      const poolTitle = document.getElementById("poll__title");
      poolTitle.textContent = poolTitleText;

      poolAnswersText.forEach((answer) => {
        createHTML(answer);
      });
      const btnAnswers = document.querySelectorAll(".poll__answer");
      btnAnswers.forEach((btn) => {
        btn.addEventListner("click", () => {
          alert("Спасибо, ваш голос засчитан!");
        });
      });
    }
  }
});
xhr.send();

// Функция создания кнопки
function createHTML(answer){
    const btnAnswer = document.createElement("button");
    btnAnswer.classList.add("pool__answer");
    btnAnswer.textContent = answer;
    pollAnswers.appendChild(btnAnswer);
    return btnAnswer;
}