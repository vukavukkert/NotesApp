 
  function createTask(){
    const content = document.getElementById('content').value;
    if(content){
      const task = document.createElement('li');
      task.className = 'flex-row-container element-generic-style task awaiting-task';
      task.innerHTML = `
          <button onclick="completeTask(this)"></button>
          <p id="taskContent">${content}</p>
          <button onclick="deleteTask(this)">X</button>
      `;
      document.getElementById('tasks').appendChild(task);
      document.getElementById('content').value = "";
    }
    }
    function completeTask(button){
      const task = button.parentNode;
      task.className = 'flex-row-container element-generic-style task completed-task';
    }

    function deleteTask(button){
      const task = button.parentNode;
      task.remove();
    }

    function clearAll(){
      tasks = document.getElementById('tasks');
      tasks.innerHTML = '';
    }