// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput").value.trim();
    if (taskInput !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        // Create checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2";
        checkbox.addEventListener("click", function () {
            li.classList.toggle("completed");
            updateTaskCount();
        });
        li.appendChild(checkbox);

        li.appendChild(document.createTextNode(taskInput));

        // Create a delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.appendChild(document.createTextNode("Delete"));
        deleteBtn.addEventListener("click", function () {
            li.remove();
            updateTaskCount();
        });

        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        document.getElementById("taskInput").value = "";
        updateTaskCount();
    } else {
        alert("Please enter a task before adding.");
    }
}

// Function to update the task count
function updateTaskCount() {
    var totalTasks = document.querySelectorAll("#taskList li").length;
    var completedTasks = document.querySelectorAll("#taskList li.completed").length;
    document.getElementById("taskCount").innerText = `${totalTasks} tasks (${completedTasks} completed)`;
}

// Event Listener for Add Task Button
document.getElementById("addTask").addEventListener("click", addTask);

// Event Listener for Clear Completed Tasks Button
document.getElementById("clearCompleted").addEventListener("click", function () {
    var completedTasks = document.querySelectorAll("#taskList li.completed");
    completedTasks.forEach(function (task) {
        task.remove();
    });
    updateTaskCount();
});

// Update task count initially
updateTaskCount();
