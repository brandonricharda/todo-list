import { objectCreationControls } from ".";
import emptyContainer from "./emptyContainer";
import newProjectForm from "./newProjectForm";

const domController = (function() {

    let newProjectButton = document.getElementById("new-project-button");
    let newTaskButton = document.getElementById("new-task-button");
    let projectList = document.getElementById("project-list");

    // activate new project button
    newProjectButton.addEventListener("click", function() {
        let form = newProjectForm();
        form.showForm();
        form.submitButton.addEventListener("click", function() {
            objectCreationControls.createNewProject(form.returnValue());
            form.hideForm();
        });
    });

    newTaskButton.addEventListener("click", function() {
        console.log("New task button clicked!");
    });

    return {
        displayLibrary: function(library) {
            // empty the projectList before populating it again
            projectList.innerHTML = "";
            library.projects.forEach( function(project) {
                let projectButton = document.createElement("button");
                projectButton.innerHTML = project.name;
                projectButton.setAttribute("class", "flat-button has-text-centered-mobile has-text-left-desktop has-white-text-on-hover has-pointer is-blue-on-hover transparent-background pl-20 pt-20 pb-20 font-size-20");
                projectList.appendChild(projectButton);
            });
        }
    }
});

export default domController;