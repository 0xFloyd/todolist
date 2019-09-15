const newProject = (projectTitle) => {
    let currentTasks = [];
    let completedTasks = [];
    let projectID = `project${projectTitle}`;

    return {
        projectTitle,
        currentTasks,
        completedTasks,
        projectID
    }
};

export {newProject}