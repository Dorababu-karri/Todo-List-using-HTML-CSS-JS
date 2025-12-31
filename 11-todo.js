const todoList = [];

const nameInput = document.querySelector('.js-name-input');
const dateInput = document.querySelector('.js-due-date');
const addButton = document.querySelector('.js-add-button');
const todoContainer = document.querySelector('.js-todo-list');

// Add via button
addButton.addEventListener('click', addTodo);

// Add via Enter key
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  const name = nameInput.value.trim();
  const duedate = dateInput.value;

  if (!name) return;

  todoList.push({ name, duedate });

  nameInput.value = '';
  dateInput.value = '';

  renderTodoList();
}

function renderTodoList() {
  todoContainer.innerHTML = '';

  todoList.forEach((todo, index) => {
    const nameDiv = document.createElement('div');
    nameDiv.textContent = todo.name;

    const dateDiv = document.createElement('div');
    dateDiv.textContent = todo.duedate;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-todo-button';

    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });

    todoContainer.append(
      nameDiv,
      dateDiv,
      deleteButton
    );
  });
}
