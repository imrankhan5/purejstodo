var todotag = document.getElementById('todo');
var todo_input = document.getElementById('todo_input');
var checkboxHtml = document.getElementsByClassName('toggle_checkbox');


var todos = [
  {
    id: 1,
    todo: 'go to market',
    complete: true
  },
  {
    id: 2,
    todo: 'purchase vegetable',
    complete: false
  }
];

function generateTodos (todos) {
  var mytodos = '<ul>';
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i].todo ;
    var checkbox = `<input class="toggle_checkbox" type="checkbox" value="${todos[i].id}" >`;
    if (todos[i].complete) {
     checkbox = `<input class="toggle_checkbox" type="checkbox"  value="${todos[i].id}" checked>`;
    }
    var deleteButton = ` <button class="delete_button" value='${todos[i].id}'>delete</button> `;
    var todohtml = checkbox + todo + deleteButton;
    var mytodos = mytodos + '<li>'+ todohtml +'</li>';
  }
  var mytodos = mytodos + '<ul>';
  return mytodos;
}

function addTodoInDom () {
  todotag.innerHTML = generateTodos(todos);
}
addTodoInDom();

todo_input.addEventListener('keypress', function (e) {
  if (e.charCode === 13 && todo_input.value.length > 1) {
    todos.push ( {
      id: todos.length + 1,
      complete: false,
      todo: todo_input.value
    });
    addTodoInDom();
    todo_input.value = "";
  }
})


function toggleCompletion (id, bool) {
  console.log('t', id);
    var seletedTodo = todos.find(function(todo) {
      return todo.id == id
    }.bind(this))
    var seletedTodoIndex = todos.findIndex(function(todo) {
      return todo.id == id
    }) 
    var todo = {
      complete: bool,
      id: seletedTodo.id,
      todo: seletedTodo.todo
    }
    todos.splice(seletedTodoIndex, 1, todo)
    // addTodoInDom();
}

function deleteTodo (id) {
  var seletedTodoIndex = todos.findIndex(function(todo) {
    return todo.id == id;
  }) 
  todos.splice(seletedTodoIndex, 1);
  addTodoInDom();
}

for (var i = 0; i < checkboxHtml.length; i++) {
  checkboxHtml[i].addEventListener("click", function () {

  });
}


document.querySelector('body').addEventListener('click', function (event) {
  if (event.target.className.toLowerCase() === 'toggle_checkbox') {
    toggleCompletion(event.target.value, event.target.checked)
    console.log(event.target.value)
  } 
  if (event.target.className.toLowerCase() === 'delete_button') {
    deleteTodo(event.target.value);
  } 
});