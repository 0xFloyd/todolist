const Project = (name) => {
    let tasks = [];
    return {name, tasks}
}

const toDoItem = () => {
    return {title, description, dueDate, priority, project}
}


export {
    Project,
    toDoItem
}







/*
const renderHome = () => {
    let divContent = document.getElementById('content');
    let homeTab = document.createElement('li');
    let homeTabLink = document.createElement('a');
    let homeTabContent = document.createElement('div');
    homeTab.className = 'nav-item';
    homeTabLink.className = "nav-link active";
    homeTabContent.className = "tabContent col-lg-6";

    const renderHomeTab = (() => {
        homeTabContent.innerHTML = `Savor every moment of your dining experience at our pizza and Italian restaurant in Cicero, New York. Serving the Cicero community since 1975, Cicero Country Pizza features delightful Italian pies and entrees, as well as sandwiches, wings, finger foods, and antipasto. Beer and wine are also available to complement your meal.`;
        document.getElementById('tabList').appendChild(homeTab);
        homeTab.appendChild(homeTabLink);
        divContent.appendChild(homeTabContent);

    })();

    const renderHomeContent = () => {
        while (divContent.hasChildNodes()) {
            divContent.removeChild(divContent.firstChild);
        }
        divContent.appendChild(homeTabContent);
    }

    homeTabLink.innerText = 'Home';
    homeTabLink.setAttribute("href", "#");
    homeTabLink.setAttribute("data-toggle", "tab");
    homeTabLink.addEventListener('click', renderHomeContent);


    return {
        tabList,
        homeTab,
        homeTabLink,
        renderHomeTab,
        homeTabContent,
        renderHomeContent,
        divContent
    }

}

export {
    renderHome
}
*/