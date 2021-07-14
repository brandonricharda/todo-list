import { domControls } from ".";
import Project from "./project";
import ProjectLibrary from "./projectLibrary";
import Task from "./task";

const objectCreationController = (function() {
    let projectLibrary = new ProjectLibrary();
    // for testing purposes
    let project = new Project("Brandon's Store");
    projectLibrary.addProject(project);
    let task = new Task("Finish the thing", "You know the thing", "2020-12-05", "High", "Incomplete", project);
    project.tasks.push(task);
    domControls.displayLibrary(projectLibrary);

    return {
        createNewProject: function(name) { 
            if (name == "") { return false };
            let project = new Project(name);
            projectLibrary.addProject(project);
            domControls.displayLibrary(projectLibrary);
            return project;
        },
        createNewTask: function(taskParams, project) {
            if (project == null) { return false };
            let name = taskParams.Name;
            if (name == "") { return false };
            let description = taskParams.Description;
            let dueDate = taskParams.DueDate;
            let priority = taskParams.Priority;
            let status = taskParams.Status;
            let task = new Task(name, description, dueDate, priority, status);
            project.tasks.push(task);
            domControls.displayLibrary(projectLibrary);
        },
        projectLibrary
    }
});

export default objectCreationController;