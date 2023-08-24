document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskNameInput = document.getElementById("task-name");
  const startTaskBtn = document.getElementById("start-task-btn");
  const stopTaskBtn = document.getElementById("stop-task-btn");
  const tasksList = document.getElementById("tasks");

  let startTime;
  let activeTaskId;

  startTaskBtn.addEventListener("click", () => {
    const taskName = taskNameInput.value.trim();
    if (taskName !== "") {
      startTime = new Date();
      activeTaskId = Date.now();
      addTaskToList(activeTaskId, taskName);
    }
  });

  stopTaskBtn.addEventListener("click", () => {
    if (startTime && activeTaskId) {
      const endTime = new Date();
      const duration = (endTime - startTime) / 1000;
      saveTask(activeTaskId, duration);
      clearActiveTask();
    }
  });

  function addTaskToList(taskId, taskName) {
    const li = document.createElement("li");
    li.innerHTML = `${taskName} <span id="${taskId}"></span>`;
    tasksList.appendChild(li);
  }

  function saveTask(taskId, duration) {
    const taskElement = document.getElementById(taskId);
    taskElement.textContent = `${duration} seconds`;

    // Send the taskId and duration to the server for saving
    // using an AJAX request or Fetch API
    // Example:
    // fetch("/save-task", {
    //   method: "POST",
    //   body: JSON.stringify({ taskId, duration }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log("Task saved:", data);
    // })
    // .catch(error => {
    //   console.error("Error saving task:", error);
    // });

    // For this example, we'll just log the task and duration
    console.log("Task saved:", { taskId, duration });
  }

  function clearActiveTask() {
    taskNameInput.value = "";
    startTime = null;
    activeTaskId = null;
  }
});
