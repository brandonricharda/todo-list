class Task {
    constructor(name, description, dueDate, priority, status) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }
    removeFromProject() {
        let index = this.project.tasks.indexOf(this);
        this.project.tasks.splice(index, 1);
    }
}

export default Task;