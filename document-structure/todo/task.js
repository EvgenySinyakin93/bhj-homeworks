// Ищем элементы
const todoInput = document.getElementById("task__input");
const todoList = document.getElementById("tasks__list");
const todoAdd = document.getElementById("tasks__add");
const todoRemove = document.querySelector('.task__remove');


//Добавляем задачу через Добавить
todoAdd.addEventListener('click', function(event) {
  event.preventDefault();
  if(todoInput.value.trim() === '') {
      return;
  }
  todoList.innerHTML += `
      <div class="task">
          <div class="task__title">
              ${todoInput.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
      </div>
  `;
  todoInput.value = '';
});

//Удаление при нажатии на Х
todoList.addEventListener('click', function(event) {
  const target = event.target;
  if (target.classList.contains('task__remove')) {
    const targetItem = target.closest('.task');
    targetItem.remove();
  }
});

