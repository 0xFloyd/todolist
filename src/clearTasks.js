const clearTasks = () => {
    let currentTasks = document.getElementById('allTasksContainer');
    let completedTasks = document.getElementById('completedTasks');
    while (currentTasks.firstChild) {
        currentTasks.removeChild(currentTasks.firstChild);
    }
    while (completedTasks.firstChild) {
        completedTasks.removeChild(completedTasks.firstChild);


    }
};

export {clearTasks}