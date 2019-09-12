const newProject = (projectName) => {
    let currentTasks = [];
    let completedTasks = [];

    return {projectName, currentTasks, completedTasks}
};

export {newProject}