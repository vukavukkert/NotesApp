let taskList = [{}];

loadTasks();

function loadTasks(){
    taskList = (JSON.parse(Cookies.get("taskList")))
    taskList.forEach(element => {
        drawTask(element.content, element.isCompleted);
    });
}

function createTask(){ // лежит на кнопке
    const content = document.getElementById("content").value;
    taskList.push({ content: content, isCompleted: false });
    saveList();
    drawTask(content, false);
}

function drawTask(content, isCompleted) { // выводит на экран
       if (content) {
        const task = document.createElement("li");
        task.className =
            "flex-row-container element-generic-style task awaiting-task";
        task.innerHTML = `
          <button onclick="completeTask(this)"></button>
          <p id="taskContent">${content}</p>
          <button onclick="deleteTask(this)">X</button>
      `;
      if(isCompleted){
        task.className = "flex-row-container element-generic-style task completed-task";
      }
        document.getElementById("tasks").appendChild(task);
        document.getElementById("content").value = "";
    }
}
function completeTask(button) {
    const task = button.parentNode;
    task.className =
        "flex-row-container element-generic-style task completed-task";
        taskList.forEach(element => {
            if(element.content == taskContent(task)){
                element.isCompleted = true;
            }
        });
        saveList();
 }
function deleteTask(button) {
    const task = button.parentNode;
    taskList.forEach(element => {
        if (element.content == taskContent(task)){
            console.log(taskContent(task));
            taskList.splice(taskList.indexOf(element), 1);
         }
    });
    saveList();
    task.remove();
}

function clearAll() {
    tasks = document.getElementById("tasks");
    tasks.innerHTML = "";
    taskList = [{}];
    saveList();
}

function taskContent(task){
    let content = task.querySelector('#taskContent').innerHTML;
    return content;
}
function saveList(){
    Cookies.set("taskList", JSON.stringify(taskList));
}