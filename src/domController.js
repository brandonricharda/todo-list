import newProjectForm from "./newProjectForm";

const domController = (function() {
    // select new project and new task buttons
    let newProjectButton = document.getElementById("new-project-button");
    let newTaskButton = document.getElementById("new-task-button");
    // activate new project button
    newProjectButton.addEventListener("click", function() {
        let form = newProjectForm();
        form.showForm();
        form.submitButton.addEventListener("click", function() {
            form.returnValue();
        });
    });

    newTaskButton.addEventListener("click", function() {
        console.log("New task button clicked!");
    });
});

export default domController;