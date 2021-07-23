import { domControls } from ".";
import displayProjectTasks from "./displayProjectTasks";
import Project from "./project";
import ProjectLibrary from "./projectLibrary";
import Task from "./task";

const objectCreationController = (function() {

    let projectLibrary = new ProjectLibrary();

    if (window.localStorage.getItem("projects") != null) {
        let existingProjects = JSON.parse(window.localStorage.getItem("projects")).projects;
        existingProjects.forEach(function(project) {
            projectLibrary.projects.push(project);
        });
    }

    if (window.localStorage.getItem("projects") != null) {
        domControls.displayLibrary(JSON.parse(window.localStorage.getItem("projects")));
    } else {
        window.localStorage.setItem("projects", JSON.stringify(projectLibrary));
    }

    return {
        createNewProject: function(name) { 
            if (name == "") { return false };
            let project = new Project(name);
            projectLibrary.addProject(project);
            window.localStorage.setItem("projects", JSON.stringify(projectLibrary));
            domControls.displayLibrary(projectLibrary.projects);
            return project;
        },
        createNewTask: function(taskParams, project) {
            if (project == null) { return false };
            let name = taskParams.Name;
            let description = taskParams.Description;
            let dueDate = taskParams.DueDate;
            let priority = taskParams.Priority;
            let task = new Task(name, description, dueDate, priority, "Incomplete");
            projectLibrary.projects.find(element => JSON.stringify(element) == JSON.stringify(project)).tasks.push(task)
            window.localStorage.setItem("projects", JSON.stringify(projectLibrary));
            project.tasks.push(task);
            displayProjectTasks(project);
        },
        projectLibrary
    }
});

export default objectCreationController;