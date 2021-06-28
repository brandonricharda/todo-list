const domController = (function() {
    // select new project and new task buttons
    let newProjectButton = document.getElementById("new-project-button");
    let newTaskButton = document.getElementById("new-task-button");
    // activate new project and new task buttons
    newProjectButton.addEventListener("click", function() {
        console.log("New project button clicked!");
    });
    newTaskButton.addEventListener("click", function() {
        console.log("New task button clicked!");
    });
});

export default domController;