import emptyContainer from "./emptyContainer";

const newTaskForm = (function() {

    let container = document.getElementById("task-form-container");
    let nameInput = document.createElement("input");
    let descriptionInput = document.createElement("input");
    let dueDateInput = document.createElement("input");
    let priorityInput = document.createElement("input");
    let statusInput = document.createElement("input");
    let submitButton = document.createElement("button");
    let hideButton = document.createElement("button");

    return {
        showForm: function() {
            // before adding a new form, make sure the container is empty (aka hide form)
            container.innerHTML = "";

            nameInput.setAttribute("id", "task-name-input");
            nameInput.setAttribute("class", "flex-1 lh-50 has-text-centered borderless no-outline mt-20-mobile");
            nameInput.setAttribute("placeholder", "Task Name");

            descriptionInput.setAttribute("id", "task-description-input");
            descriptionInput.setAttribute("class", "flex-1 lh-50 has-text-centered borderless no-outline");
            descriptionInput.setAttribute("placeholder", "Task Description");

            dueDateInput.setAttribute("id", "task-due-date-input");
            dueDateInput.setAttribute("class", "flex-1 lh-50 has-text-centered borderless no-outline");
            dueDateInput.setAttribute("type", "date");
            // dueDateInput.setAttribute("onfocus", "(this.type = 'date')");
            // dueDateInput.setAttribute("onblur", "(this.type = 'text')");
            dueDateInput.setAttribute("placeholder", "Due Date");

            priorityInput.setAttribute("id", "task-priority-input");
            priorityInput.setAttribute("class", "flex-1 lh-50 has-text-centered borderless no-outline");
            priorityInput.setAttribute("placeholder", "Priority");

            submitButton.innerHTML = "Create";
            submitButton.setAttribute("class", "flex-1 flat-button is-green has-white-text has-pointer ml-20-mobile mr-20-mobile lh-50");
            submitButton.setAttribute("id", "submit-button");

            hideButton.innerHTML = "Cancel";
            hideButton.setAttribute("class", "flex-1 flat-button is-red has-white-text has-pointer ml-20-mobile mr-20-mobile lh-50");

            container.appendChild(nameInput);
            container.appendChild(descriptionInput);
            container.appendChild(dueDateInput);
            container.appendChild(priorityInput);
            container.appendChild(submitButton);
            container.appendChild(hideButton);

            hideButton.addEventListener("click", function() {
                container.innerHTML = "";
            });
        },
        hideForm: function() {
            emptyContainer(container);
        },
        returnValue: function() {
            return {
                Name: nameInput.value,
                Description: descriptionInput.value,
                DueDate: dueDateInput.value,
                Priority: priorityInput.value,
                Status: statusInput.value
            }
        },
        submitButton
    }

});

export default newTaskForm;