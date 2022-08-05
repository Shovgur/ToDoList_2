const addMessage = document.querySelector(".message");
const addButton = document.querySelector(".add");
const todo = document.querySelector(".todo");

let todoList = [];

if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  displayMessages();
}

addButton.addEventListener("click", function () {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };

  todoList.push(newTodo);
  displayMessages();
  localStorage.setItem("todo", JSON.stringify(todoList));
});

function displayMessages() {
  let displayMessages = "";
  todoList.forEach(function (item, i) {
    displayMessages += `
    <li>
    <input type= 'checkbox' id= 'item_${i}'${item.checked ? "checked" : ""}>
    <label for= 'item_${i}'>${item.todo}</label>
    </li>
    `;

    todo.innerHTML = displayMessages;
  });
}

todo.addEventListener("change", function (event) {
  let valueLabel = todo.querySelector(
    "[for=" + event.target.getAttribute("id") + "]"
  ).innerHTML;

todoList.forEach(function(item){
    if(item.todo === valueLabel){
        item.checked = !item.checked 
        localStorage.setItem('todo', JSON.stringify(todoList))
    }
})

});
