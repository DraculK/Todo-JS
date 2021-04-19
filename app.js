//Selectors
const todoInput = document.querySelector('.todo-input');

const todoButton = document.querySelector('.todo-button');

const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event){
    //Impede a página de recarregar quando demos submit
    event.preventDefault();

    //Criar div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Criar li
    const newTodo = document.createElement('li');
    newTodo.innerText = "Aprendendo..";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Botões
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);

    //Append
    todoList.appendChild(todoDiv);
}