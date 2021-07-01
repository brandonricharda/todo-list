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

    let taskInfoButton = document.createElement("button");
    taskInfoButton.innerHTML = "Info";
    taskInfoButton.setAttribute("class", "is-orange flex-1 flat-button has-text-centered-mobile has-pointer squared-35 has-white-text width-60-mobile");
    taskContainer.appendChild(taskInfoButton);

    let taskDeleteButton = document.createElement("button");
    taskDeleteButton.innerHTML = "Delete";
    taskDeleteButton.setAttribute("class", "is-red flex-1 flat-button has-text-centered-mobile has-pointer squared-35 has-white-text width-60-mobile mr-20 mr-0-mobile");
    taskContainer.appendChild(taskDeleteButton);

    container.appendChild(taskContainer);
    
});

export default displayTask;