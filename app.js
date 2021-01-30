// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
/* The DOMContentLoaded event fires when the initial HTML document 
has been completely loaded and parsed */
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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

  // ADD TO LOCAL STORAGE
  saveLocalTodos(todoInput.value);

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
};

function deleteCheck(e){
  console.log(e.target);
  const item = e.target;
  console.log(item.classList);
  //  DELETE TODO 
  if (item.classList[0] === "trash-button") {
    console.log("bingo");
    const todo = item.parentElement;
    //  ANIMATION
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove();
    })
  }

  // CHECK MARK
  if (item.classList[0] === "complete-button"){
    const todo =item.parentElement;
    todo.classList.toggle('completed')

  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  // console.log(todos);
  // This is the wizzardry;
  todos.forEach(function(todo){
    // e.target.value will be either; all / completed / uncompleted
    console.log("this it todo", todo);
    if (todo.classList !== undefined) {

      switch(e.target.value){
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if(todo.classList.contains('completed')){
            todo.style.display = "flex";
          } else{
            todo.style.display = "none"
          }
          break;
        case "uncompleted":
          if(!todo.classList.contains('completed')){
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "default":
          todo.style.display = "none";
          break;
      }
    }
  })
}

function saveLocalTodos(todo){
  // check if there are things already there
  let todos;
  // below checks if we hve any
  if(localStorage.getItem('todos') === null){
    // if not creates an array
    todos = [];
  } else {
    //  passes back the array from local storage
    todos =JSON.parse(localStorage.getItem('todos'));
  }
  //  if we do have a todo we are pushing it to the array
  todos.push(todo);
  // and send it back to local storage;
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
  // check if there are things already there
  let todos;
  // below checks if we hve any
  if (localStorage.getItem("todos") === null) {
    // if not creates an array
    todos = [];
  } else {
    //  passes back the array from local storage
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo){
    // CREATE Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // CREATE LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
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
  })
}