const displayTask = (function(container, task) {

    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task flex flex-vertical-center is-grey-on-hover pl-20");

    let taskMetadataContainer = document.createElement("div");
    taskMetadataContainer.setAttribute("class", "task-metadata flex-10 flex-column flex");

    let taskName = document.createElement("h3");
    taskName.innerHTML = task.name;
    taskMetadataContainer.appendChild(taskName);

    let taskDueDate = document.createElement("p");
    taskDueDate.innerHTML = task.dueDate;
    taskMetadataContainer.appendChild(taskDueDate);

    taskContainer.appendChild(taskMetadataContainer);

    let taskCompleteButton = document.createElement("button");
    taskCompleteButton.innerHTML = "Complete";
    taskCompleteButton.setAttribute("class", "flex-1 flat-button has-text-centered-mobile has-pointer squared-35 is-green has-white-text width-60-mobile");
    taskContainer.appendChild(taskCompleteButton);
    taskCompleteButton.addEventListener("click", function() {
        task.status = "Complete";
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
        task.removeFromProject();
    });

    container.appendChild(taskContainer);
    
});

export default displayTask;