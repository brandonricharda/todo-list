import { objectCreationControls } from ".";
import newProjectForm from "./newProjectForm";
import displayProjectTasks from "./displayProjectTasks";
import newTaskForm from "./newTaskForm";

const domController = (function() {

    let newProjectButton = document.getElementById("new-project-button");
    let newTaskButton = document.getElementById("new-task-button");
    let projectList = document.getElementById("project-list");
    let currentProject = null;

    let displayLibrary = function(library) {
        // empty the projectList before populating it again
        projectList.innerHTML = "";

        library.projects.forEach(function(project) {

            let projectButton = document.createElement("button");

            projectButton.addEventListener("click", function() {
                displayProjectTasks(project);
                currentProject = project;
            });

            projectButton.innerHTML = project.name;
            projectButton.setAttribute("class", "flat-button has-text-centered-mobile has-text-left-desktop has-white-text-on-hover has-pointer is-blue-on-hover transparent-background pl-20 pt-20 pb-20 font-size-20");
            projectList.appendChild(projectButton);

        });
    }

    // activate new project button
    newProjectButton.addEventListener("click", function() {
        let form = newProjectForm();
        form.showForm();
        form.submitButton.addEventListener("click", function() {
            let project = objectCreationControls.createNewProject(form.returnValue());
            displayLibrary(objectCreationControls.projectLibrary);
            currentProject = project;
            displayProjectTasks(currentProject);
            form.hideForm();
        });
    });

    newTaskButton.addEventListener("click", function() {
        let form = newTaskForm();
        form.showForm();
        form.submitButton.addEventListener("click", function() {
            if (objectCreationControls.createNewTask(form.returnValue(), currentProject) != false) {
                displayProjectTasks(currentProject);
                form.hideForm();
            }
        });
    });

    return {
        displayLibrary
    }
});

export default domController;