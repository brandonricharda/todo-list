import emptyContainer from "./emptyContainer";

const newProjectForm = (function() {

    let container = document.getElementById("project-form-container");
    let nameInput = document.createElement("input");
    let submitButton = document.createElement("button");
    let hideButton = document.createElement("button");

    return {
        showForm: function() {
            // before adding a new form, make sure the container is empty (aka hide form)
            container.innerHTML = "";

            nameInput.setAttribute("id", "project-name-input");
            nameInput.setAttribute("class", "flex-1 lh-50 has-text-centered borderless");
            nameInput.setAttribute("placeholder", "Project Name");

            submitButton.innerHTML = "Create";
            submitButton.setAttribute("class", "flex-1 flat-button is-green has-white-text has-pointer ml-20-mobile mr-20-mobile");
            submitButton.setAttribute("id", "submit-button");

            hideButton.innerHTML = "Cancel";
            hideButton.setAttribute("class", "flex-1 flat-button is-red has-white-text has-pointer ml-20-mobile mr-20-mobile");

            container.appendChild(nameInput);
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
            return nameInput.value;
        },
        submitButton
    }

});

export default newProjectForm;