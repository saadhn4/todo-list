let todos = JSON.parse(localStorage.getItem("todos")) || [];

function showTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  todos.forEach((x, index) => {
    const todoItem = document.createElement("div");

    // styling the tasks being added
    todoItem.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";
    todoItem.style.marginTop = "10px";
    todoItem.style.paddingTop = "10px";
    todoItem.style.paddingBottom = "10px";
    todoItem.innerHTML = `
    <span>${x}</span>
    <div>
    <button class="actions edit" onclick=editTodo(${index})>Edit</button>
    <button class="actions delete" onclick=deleteTodo(${index})>Delete</button>
    </div>
    `;

    // styling to the edit and delete buttons
    const actions = todoItem.querySelectorAll(".actions");
    actions.forEach((action) => {
      action.style.border = "none";
      action.style.padding = "12px";
      action.style.borderRadius = "10px";
      action.style.marginRight = "8px";
      action.style.marginTop = "10px";
      action.style.cursor = "pointer";
    });

    const edit = todoItem.querySelectorAll(".edit");
    edit.forEach((x) => {
      x.style.backgroundColor = "#f0ad4e";
      x.style.color = "#fff";
      x.style.fontWeight = "bold";
    });

    const del = todoItem.querySelectorAll(".delete");
    del.forEach((x) => {
      x.style.backgroundColor = "#d9534f";
      x.style.color = "#fff";
      x.style.fontWeight = "bold";
    });

    todoList.append(todoItem);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const task = todoInput.value.trim();
  if (!task) {
    alert("Please enter a task!");
    return;
  }
  todos.unshift(task);
  todoInput.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodos();
}

//allowing users to add task by pressing enter too

document.getElementById("todoInput").addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addTodo();
  }
});

function editTodo(index) {
  const update = prompt("Update Task:", todos[index]);
  if (!update) {
    alert("Enter a task.");
    return;
  }
  todos[index] = update;
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  showTodos();
}
