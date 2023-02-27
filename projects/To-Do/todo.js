// get references to UI elements
const input = document.querySelector("input[type='text']");
const todoList = document.querySelector(".todo-list");
const completedTasksList = document.querySelector(".completed-tasks ul");

// listen for the "Enter" key press on the input field
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const taskText = event.target.value.trim();
    if (taskText) {
      addTask(taskText);
      event.target.value = "";
    }
  }
});

// listen for click events on the todo list and the completed tasks list
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("complete-button")) {
    completeTask(event.target);
  } else if (event.target.classList.contains("undo-button")) {
    undoTask(event.target);
  }
});

function addTask(text) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = "Complete";
  button.classList.add("complete-button");
  li.appendChild(button);
  li.innerHTML += "<span>" + text + "</span>";
  todoList.appendChild(li);
}

function completeTask(button) {
  const li = button.parentNode;
  li.classList.add("completed");
  const text = li.querySelector("span").textContent;
  const undoButton = document.createElement("button");
  undoButton.textContent = "Undo";
  undoButton.classList.add("undo-button");
  li.removeChild(button);
  li.insertBefore(undoButton, li.firstChild);
  completedTasksList.appendChild(li);
}

function undoTask(button) {
  const li = button.parentNode;
  li.classList.remove("completed");
  const text = li.querySelector("span").textContent;
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add("complete-button");
  li.removeChild(button);
  li.appendChild(completeButton);
  todoList.appendChild(li);
}

