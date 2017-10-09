var todotag = document.getElementById('todo');
var todo_text = document.getElementById("todo_text");
var button = document.getElementById('submit_button');


var todos = [
  'go to market',
  'purchase grocery stuff',
  'come to home',
  'study for one hour',
  'clean my room',
  'bath'
];
function generateTodos (todos) {
  var mytodos = '<ul>';
  for (var i = 0; i < todos.length; i++) {
    mytodos = mytodos + "<li>" + todos[i] + "</li>";
  }
  mytodos = mytodos + "</ul>";
  return mytodos;
}

function addToDoInDom () {
  todotag.innerHTML = generateTodos(todos);
}

function updateTodosAndAddToDom () {
  todos.push(todo_text.value);
  todo_text.value = "";
  addToDoInDom();
}

button.addEventListener('click', function () {
  updateTodosAndAddToDom();
})
todo_text.addEventListener('keypress', function (e) {
  if (e.charCode === 13) {
    updateTodosAndAddToDom();
  }
})

addToDoInDom();