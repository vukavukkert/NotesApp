function addTask() {
    const title = document.getElementById('taskTitle').value;
    const content = document.getElementById('taskContent').value;
  
    if (title && content) {
      const task = document.createElement('li');
      task.className = 'task';
      task.innerHTML = `
        <div>
          <strong>${title}</strong>
          <p>${content}</p>
        </div>
        <div>
          <button onclick="deleteTask(this)">Delete</button>
          <button onclick="completeTask(this)">Complete</button>
        </div>
      `;
  
      document.getElementById('tasks').appendChild(task);
    }
  }
  
  function deleteTask(button) {
    const task = button.parentNode.parentNode;
    task.remove();
  
    const deletedTask = task.cloneNode(true);
    deletedTask.className = 'deleted-task';
  
    const restoreButton = document.createElement('button');
    restoreButton.textContent = 'Restore';
    restoreButton.onclick = function () {
      restoreTask(this);
    };
  
    const deletePermanentlyButton = document.createElement('button');
    deletePermanentlyButton.textContent = 'Delete Permanently';
    deletePermanentlyButton.onclick = function () {
      deleteTaskPermanently(this);
    };
  
    deletedTask.querySelector('div:last-child').innerHTML = ''; // Очищаем содержимое
    deletedTask.querySelector('div:last-child').appendChild(restoreButton);
    deletedTask.querySelector('div:last-child').appendChild(deletePermanentlyButton);
  
    document.getElementById('deletedTasks').appendChild(deletedTask);
  }
  
  function completeTask(button) {
    const task = button.parentNode.parentNode;
    task.remove();
  
    const completedTask = task.cloneNode(true);
    completedTask.className = 'completed-task';
  
    const restoreButton = document.createElement('button');
    restoreButton.textContent = 'Restore';
    restoreButton.onclick = function () {
      restoreTask(this);
    };
  
    completedTask.querySelector('div:last-child').innerHTML = ''; // Очищаем содержимое
    completedTask.querySelector('div:last-child').appendChild(restoreButton);
  
    document.getElementById('completedTasks').appendChild(completedTask);
  }
  
  function restoreTask(button) {
    const deletedTask = button.parentNode.parentNode;
    deletedTask.remove();
  
    const restoredTask = deletedTask.cloneNode(true);
    restoredTask.className = 'task';
  
    const deleteButton = restoredTask.querySelector('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      deleteTask(this);
    };
  
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function () {
      completeTask(this);
    };
  
    restoredTask.querySelector('div:last-child').innerHTML = ''; // Очищаем содержимое
    restoredTask.querySelector('div:last-child').appendChild(deleteButton);
    restoredTask.querySelector('div:last-child').appendChild(completeButton);
  
    document.getElementById('tasks').appendChild(restoredTask);
  }
  
  function deleteTaskPermanently(button) {
    const confirmation = confirm('Are you sure you want to delete this task permanently?');
  
    if (confirmation) {
      const deletedTask = button.parentNode.parentNode;
      deletedTask.remove();
    }
  } 