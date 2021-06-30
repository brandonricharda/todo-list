import { domControls } from ".";
import Project from "./project";
import ProjectLibrary from "./projectLibrary";

const objectCreationController = (function() {
    let projectLibrary = new ProjectLibrary();
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