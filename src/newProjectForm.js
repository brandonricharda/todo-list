import emptyContainer from "./emptyContainer";

const newProjectForm = (function() {

    let container = document.getElementById("project-form-container");
    let nameInput = document.createElement("input");
    let submitButton = document.createElement("button");
    let hideButton = document.createElement("button");

    return {
        showForm: function() {
            // before adding a new form, make sure the container is empty (aka hide form)
            emptyContainer(container);

            nameInput.setAttribute("id", "project-name-input");
            nameInput.setAttribute("class", "flex-1");
            nameInput.setAttribute("placeholder", "Project Name");

            submitButton.innerHTML = "Create";
            submitButton.setAttribute("class", "flex-1 flat-button is-green has-white-text has-pointer");
            submitButton.setAttribute("id", "submit-button");

            hideButton.innerHTML = "Cancel";
            hideButton.setAttribute("class", "flex-1 flat-button is-red has-white-text has-pointer");

            container.appendChild(nameInput);
            container.appendChild(submitButton);
            container.appendChild(hideButton);

            hideButton.addEventListener("click", function() {
                emptyContainer(container);
            });

        },
        hideForm: function() {
            emptyContainer(container);
        },
        returnValue: function() {
            return nameInput.value;
        },
        submitButton
    }

});

export default newProjectForm;