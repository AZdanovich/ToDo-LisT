const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDate = document.getElementById("task-date");
const taskPriority = document.getElementById("task-priority");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskDescription = taskInput.value;
  const dueDate = taskDate.value;
  const priority = taskPriority.value;

  if (taskDescription !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        li.classList.add("checked");
      } else {
        li.classList.remove("checked");
      }
    });

    li.appendChild(checkbox);
    li.appendChild(
      document.createTextNode(
        `${taskDescription} (Срок: ${dueDate}, Приоритет: ${priority})`
      )
    );

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.style.backgroundColor = "red";
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
  }
});
