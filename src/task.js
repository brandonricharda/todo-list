class Task {
    constructor(name, description, dueDate, priority, status, project) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project;
    }
    removeFromProject() {
        let index = this.project.tasks.indexOf(this);
        this.project.tasks.splice(index, 1);
    }
}

export default Task;