const newProjectForm = (function() {

    let projectFormContainer = document.getElementById("project-form-container");

    return {
        hideForm: function() {
            projectFormContainer.innerHTML = "";
        },
        showForm: function() {
            this.hideForm();
            // create new project form elements
            let projectNameInput = document.createElement("input");
            projectNameInput.setAttribute("id", "project-name-input");
            projectNameInput.setAttribute("placeholder", "Project Name");
            let projectSubmitButton = document.createElement("button");
            projectSubmitButton.innerHTML = "Create";
            projectSubmitButton.setAttribute("id", "project-submit-button");
            // add new project form elements to DOM
            projectFormContainer.appendChild(projectNameInput);
            projectFormContainer.appendChild(projectSubmitButton);
        }
    }

});

export default newProjectForm;