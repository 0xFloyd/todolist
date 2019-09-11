//script for creating the DOM element for a new task

const newTaskDiv = (title,description, date, priority) => {
    let allTasks = document.getElementById("allTasksContainer");

    let taskRow = document.createElement('div');
    taskRow.className = "row taskRow";

    let taskCheckbox = document.createElement('div');
    taskCheckbox.className = "col-1 align-self-center";

    let taskTitleContainer = document.createElement('div');
    taskTitleContainer.className = "col-7 align-self-center";

    let taskTitle = document.createElement('a');
    $(taskTitle).attr({
        "tabindex": "0",
        "data-placement": "bottom",
        "role": "button",
        "data-toggle": "popover",
        "data-trigger": "focus",
        "data-content": description
    });
    taskTitle.innerHTML = title;

    $(function () {
        $('[data-toggle="popover"]').popover()
    })
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })
    
    let taskPriority = document.createElement('div');
    taskPriority.className = "col-1 align-self-center";
    taskPriority.innerHTML = priority;

    let taskDate = document.createElement('div');
    taskDate.className = "col-2 align-self-center";
    taskDate.innerHTML = date;

    let taskCloseButton = document.createElement('div');
    taskCloseButton.className = "col-1 align-self-center";

    let taskCloseButtonX = document.createElement('a');
    taskCloseButtonX.className = "closeButton";
    
    taskRow.appendChild(taskCheckbox);
    taskTitleContainer.appendChild(taskTitle);
    taskRow.appendChild(taskTitleContainer);
    taskRow.appendChild(taskPriority);
    taskRow.appendChild(taskDate);
    taskCloseButton.appendChild(taskCloseButtonX);
    taskRow.appendChild(taskCloseButton);
    allTasks.appendChild(taskRow);

    return {allTasks, taskCheckbox, taskCloseButton, taskCloseButtonX, taskDate, taskPriority, taskRow, taskTitle, taskTitleContainer}

};

export {
    newTaskDiv
}