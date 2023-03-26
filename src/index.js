document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority")
  const newTasksList = document.getElementById("tasks");
  createTaskForm.addEventListener("submit", createNewTask);

});

const createNewTask = function (event) {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("new");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset(); 

const deleteButton = document.createElement("button");
deleteButton.textContent = "X"
newTask.appendChild(deleteButton);

deleteButton.addEventListener("click", deleteTask)
};

const appendNewTask = function (task) {
  document.getElementById("tasks").appendChild(task);
}

function deleteTask (event) {
  event.target.parentNode.remove();
}