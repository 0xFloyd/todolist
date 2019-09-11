import {
    Project,
    toDoItem
} from './toDoItems'
import {
    format,
} from 'date-fns'
import {newTaskDiv} from './newTaskDiv.js';

const addProjectTask = (e) => {
    e.preventDefault();
    
    let taskTitle = submitForm.elements[0].value;
    let taskDescription = submitForm.elements[1].value;
    let taskDate = submitForm.elements[2].value;
    format(taskDate, 'M/D/YY');
    let taskPriority = submitForm.elements[3].value;
    
    console.log(taskTitle, taskDescription, taskDate, taskPriority);
    
    newTaskDiv(taskTitle, taskDescription, taskDate, taskPriority);
    submitForm.reset();
    return {taskTitle,
        taskDescription,
        taskDate,
        taskPriority
    }
};

let submitForm = document.getElementById('formSubmit');
submitForm.addEventListener('submit', addProjectTask);

$(function () {
    $('[data-toggle="popover"]').popover()
})
$('.popover-dismiss').popover({
    trigger: 'focus'
})


/*
import { renderHome } from './home'
import { renderContact } from './contact'
import { renderMenu } from './menu'


const pageHeader = (() => {
    let pageDocument = document.getElementById("pageDocument");
    let navList = document.createElement('ul');
    let pageHeader = document.createElement('div');
    let pageHeaderTitle = document.createElement('h1');
    let mainContent = document.createElement('div');

    navList.className = 'nav nav-tabs';
    navList.setAttribute('id', 'tabList');
    mainContent.setAttribute('id', 'content');
    pageHeader.className = 'pageHeader';
    pageHeaderTitle.className = "pageHeaderTitle";
    pageHeaderTitle.innerHTML = "Cicero Country Pizza";

    pageHeader.appendChild(pageHeaderTitle);
    pageDocument.appendChild(pageHeader);
    pageDocument.appendChild(navList);
    pageDocument.appendChild(mainContent);

    
 




    return {
        pageHeader,
        pageDocument,
        pageHeaderTitle,
        mainContent,
        navList
    }

})();

renderHome();
renderContact();
renderMenu();

   */