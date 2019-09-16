//import {moment, format} from 'moment';
import {newTaskDiv} from './newTaskDiv.js';
import {newProject} from './newProject.js';
import {clearTasks} from './clearTasks.js';

let projects = [];
let todos = [];
let currentProject = newProject("Project 1");
currentProject = currentProject.projectID.slice(7);
//allProjects.push(currentProject);
let activeDisplayedProject = document.getElementById("activeProject");
//activeDisplayedProject.innerHTML = currentProject;

const addProjectTask = (e) => {
    e.preventDefault();
    let taskTitle = submitForm.elements[0].value;
    let taskDescription = submitForm.elements[1].value;
    let taskDate = submitForm.elements[2].value;
    taskDate = formatDate(taskDate);
    let taskPriority = submitForm.elements[3].value;
    let todoArray = [taskTitle,
        taskDescription, taskDate, taskPriority, currentProject];
    todos.push(todoArray);
    let temporaryTask = newTaskDiv(taskTitle, taskDescription, taskDate, taskPriority, currentProject);
    submitForm.reset();
    $('#addTaskModal').modal('hide');
    addCheckBoxEventListener();
   
    return {taskTitle,
        taskDescription,
        taskDate,
        taskPriority,
        todoArray,
        temporaryTask
    }
};

const addProject = (e) => {
    e.preventDefault();
    let projectTitle = newProjectSubmit.elements[0].value;
    let temporaryProject = newProject(projectTitle);
    newProjectSubmit.reset();
    let projectDropdownList = document.getElementById("dropDownMenuList");
    activeDisplayedProject.innerHTML = projectTitle;
    let newProjectToAdd = document.createElement('a');
    newProjectToAdd.setAttribute('id', temporaryProject.projectID);
    newProjectToAdd.addEventListener('click', changeActiveProjectDisplayed);
    newProjectToAdd.innerHTML = projectTitle;
    newProjectToAdd.className = "dropdown-item";
    projectDropdownList.appendChild(newProjectToAdd);
    $('#newProjectModal').modal('hide');
    currentProject = temporaryProject.projectID;
    currentProject = currentProject.slice(7);
    projects.push(currentProject);
    clearTasks();
    return {
        projectTitle,
        currentProject
    }
};

const checkBoxClicked = (e) => {
    let completedTaskListTitle = document.getElementById("completedTasks");
    let taskDiv = (e.target.parentNode.parentNode);
    let testDiv = e.target.parentNode.parentNode.children[1].firstChild.innerHTML;      //complicated way to return task name from task checkbox that was clicked 
    let checkbox = e.target.parentNode.parentNode.children[0].firstChild;
    checkbox.setAttribute('disabled', true);
    for (let i = 0; i < todos.length; i++) {
        if (testDiv == todos[i][0]) {
            todos.splice(i, 1);
        }
    };

    if (e.target.checked) {
        completedTaskListTitle.appendChild(taskDiv);
        taskDiv.setAttribute("style", "text-decoration: line-through;");
    };

    /*
    if (!e.target.checked) {
        currentTaskListTitle.appendChild(taskDiv);
        taskDiv.setAttribute("style", "text-decoration: none");
    }*/

};

const addCheckBoxEventListener = () => {
    let allCheckboxes = document.getElementsByClassName("checkbox");
    for (let i = 0; i <= allCheckboxes.length; i++) {
        if (allCheckboxes[i]) {
            allCheckboxes[i].addEventListener('click', checkBoxClicked);
        }
    }
};

const changeActiveProjectDisplayed = (e) => {
    let elementID = e.target.id;
    let elementIDTitle = elementID.slice(7);
    activeDisplayedProject.innerHTML = elementIDTitle;
    clearTasks();
    for (let i = 0; i < todos.length; i++) {
        if (elementIDTitle == todos[i][4]) {
            newTaskDiv(todos[i][0], todos[i][1], todos[i][2], todos[i][3], todos[i][4]);
        }
    }
    addCheckBoxEventListener();
};


let submitForm = document.getElementById('formSubmit');
submitForm.addEventListener('submit', addProjectTask);

let addProjectSubmit = document.getElementById('newProjectSubmit');
addProjectSubmit.addEventListener('submit', addProject);

let defaultStarterProject = document.getElementById("projectProject 1");
defaultStarterProject.addEventListener('click', changeActiveProjectDisplayed);
activeDisplayedProject.innerHTML = defaultStarterProject.innerHTML;

addCheckBoxEventListener();

$(function () {
    $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
    trigger: 'focus'
})

const formatDate = (date) => {
    let newDate = date.split('-');
    newDate[0] = newDate[0].substring(2);
    newDate = newDate[1] + '/' + newDate[2] + '/' + newDate[0];
    return newDate;
};