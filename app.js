// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event){
  // below prevents the browser from refreshing.
  event.preventDefault();

  // CREATE Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // CREATE LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  // CREATES;  <li class="todo-item">hey</li>
  todoDiv.appendChild(newTodo);

  // CREATE CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);

  // CREATE TRASH MARK BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);

  // APPEND TO TODO LIST
  todoList.appendChild(todoDiv);

  // CLEAR Todo INPUT VALUE
  todoInput.value ="";

  console.log("success meatbag");
  // creates; <div class="todo">
  //            <li class="todo-item">hey</li>
  //            <button class="completedButton"></button>
  //            <button class="trashButton"></button>
  //          </div>
}