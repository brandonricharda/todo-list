import { objectCreationControls } from ".";

const displayTask = (function(container, task, project) {

    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task flex flex-vertical-center is-grey-on-hover pl-20");

    let taskMetadataContainer = document.createElement("div");
    taskMetadataContainer.setAttribute("class", "task-metadata flex-10 flex-row flex flex-column-mobile has-text-centered-mobile");

    let taskName = document.createElement("h3");
    taskName.innerHTML = `Name: ${task.name}`;
    taskMetadataContainer.appendChild(taskName);

    let taskDueDate = document.createElement("h3");
    taskDueDate.innerHTML = `Due: ${task.dueDate}`;
    taskMetadataContainer.appendChild(taskDueDate);
    taskDueDate.setAttribute("class", "pl-20 pr-20 no-padding-mobile");

    let taskPriority = document.createElement("h3");
    taskPriority.innerHTML = `Priority: ${task.priority}`;
    taskMetadataContainer.appendChild(taskPriority);

    taskContainer.appendChild(taskMetadataContainer);

    let taskCompleteButton = document.createElement("button");
    taskCompleteButton.innerHTML = "Complete";
    taskCompleteButton.setAttribute("class", "flex-1 flat-button has-text-centered-mobile has-pointer squared-35 is-green has-white-text width-60-mobile");

    taskContainer.appendChild(taskCompleteButton);

    taskCompleteButton.addEventListener("click", function() {
        if (task.status == "Incomplete") {
            task.status = "Complete";
            window.localStorage.setItem("projects", JSON.stringify(objectCreationControls.projectLibrary));
        } else {
            alert("This task is already complete!");
        }
    });

    let taskInfoButton = document.createElement("button");
    taskInfoButton.innerHTML = "Info";
    taskInfoButton.setAttribute("class", "is-orange flex-1 flat-button has-text-centered-mobile has-pointer squared-35 has-white-text width-60-mobile");
    taskContainer.appendChild(taskInfoButton);
    taskInfoButton.addEventListener("click", function() {
        alert(`Task Description: ${task.description}`);
    });

    let taskDeleteButton = document.createElement("button");
    taskDeleteButton.innerHTML = "Delete";
    taskDeleteButton.setAttribute("class", "is-red flex-1 flat-button has-text-centered-mobile has-pointer squared-35 has-white-text width-60-mobile mr-20 mr-0-mobile");
    taskContainer.appendChild(taskDeleteButton);
    taskDeleteButton.addEventListener("click", function() {
        container.removeChild(taskContainer);
        let taskIndex = project.tasks.findIndex(element => element == task);
        let taskProjectIndex = objectCreationControls.projectLibrary.projects.findIndex(element => JSON.stringify(element) == JSON.stringify(project));
        objectCreationControls.projectLibrary.projects[taskProjectIndex].tasks.splice(taskIndex, 1);
        project.tasks.splice(taskIndex, 1);
        console.log(objectCreationControls.projectLibrary);
        window.localStorage.setItem("projects", JSON.stringify(objectCreationControls.projectLibrary));
    });

    container.appendChild(taskContainer);
    
});

export default displayTask;