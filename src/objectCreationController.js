import { domControls } from ".";
import Project from "./project";
import ProjectLibrary from "./projectLibrary";
import Task from "./task";

const objectCreationController = (function() {
    let projectLibrary = new ProjectLibrary();
    let project = new Project("Digitally Savvy");
    let task = new Task("Finish Thing", "You Know", "August 1 2021", "High", "Not Done");
    project.tasks.push(task);
    projectLibrary.projects.push(project);
    return {
        createNewProject: function(name) { 
            if (name == "") { return false };
            let project = new Project(name);
            projectLibrary.addProject(project);
            domControls.displayLibrary(projectLibrary);
        },
        projectLibrary
    }
});

export default objectCreationController;