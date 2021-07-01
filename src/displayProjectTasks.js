import displayTask from "./displayTask.js"

const displayProjectTasks = (function(project) {
    let taskListContainer = document.getElementById("task-list");
    taskListContainer.innerHTML = "";
    project.tasks.forEach(function(task) {
        displayTask(taskListContainer, task);
    });
});

export default displayProjectTasks;