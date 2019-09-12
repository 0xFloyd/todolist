//import {moment, format} from 'moment';
import {newTaskDiv} from './newTaskDiv.js';
import {newProject} from './newProject.js';

let currentProject = newProject('Project1');
let allProjects = [];
allProjects.push(currentProject);


const addProjectTask = (e) => {
    e.preventDefault();
    console.log("did this work");
    let taskTitle = submitForm.elements[0].value;
    let taskDescription = submitForm.elements[1].value;
    let taskDate = submitForm.elements[2].value;
    let taskPriority = submitForm.elements[3].value;
    newTaskDiv(taskTitle, taskDescription, taskDate, taskPriority);
    submitForm.reset();
    $('#addTaskModal').modal('hide');
    return {taskTitle,
        taskDescription,
        taskDate,
        taskPriority
    }
};

const addProject = (e) => {
    e.preventDefault();
    let projectTitle = newProjectSubmit.elements[0].value;
    let temporaryProject = newProject(projectTitle);
    allProjects.push(temporaryProject);
    newProjectSubmit.reset();
    let projectDropdownList = document.getElementById("dropDownMenuList");
    let dropdownMenuButton = document.getElementById("dropdownMenuButton");
    let newProjectToAdd = document.createElement('a');
    newProjectToAdd.innerHTML = projectTitle;
    dropdownMenuButton.innerHTML = projectTitle;
    newProjectToAdd.className = "dropdown-item";
    projectDropdownList.appendChild(newProjectToAdd);
    $('#newProjectModal').modal('hide');
    console.log(allProjects);
    return {
        projectTitle,
        temporaryProject
    }
};




let submitForm = document.getElementById('formSubmit');
submitForm.addEventListener('submit', addProjectTask);

let addProjectSubmit = document.getElementById('newProjectSubmit');
addProjectSubmit.addEventListener('submit', addProject);

$(function () {
    $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
    trigger: 'focus'
})
