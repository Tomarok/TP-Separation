"use strict"

const usersList = [
    {
        "id": 1,
        "name": "Leanne Graham"
    },
    {
        "id": 2,
        "name": "Ervin Howell"
    },
    {
        "id": 3,
        "name": "Clementine Bauch"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack"
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich"
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist"
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat"
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V"
    },
    {
        "id": 9,
        "name": "Glenna Reichert"

    },
    {
        "id": 10,
        "name": "Clementina DuBuque"
    }
]

let todoList
let userGroup

function onInitFunction(){
    fetch("https://jsonplaceholder.typicode.com/todos").then(
        res => {
            res.json().then(
                data => {
                    filterTable(data)
                })
        })
}

function filterTable(data) {
    todoList = data
    let dataCompleted = todoList.filter(datas => datas.completed === true)
    console.log(dataCompleted.length + ' tasks completed')

    let todosPerUser = {};
    todoList.forEach(todo => {
            if (!todosPerUser[todo.userId]) {
                todosPerUser[todo.userId] = [];
            }
            todosPerUser[todo.userId].push(todo);
        }
    );
    userGroup = todosPerUser
    consoleGroup(getNumberOfUser(todosPerUser), todosPerUser)
    createList(getNumberOfUser(todosPerUser), todosPerUser)
}

function getNumberOfUser(obj) {
    let result = 0;
    for(let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result++;
        }
    }
    return result;
}

function createList(userNumber, tasklist){
    for (let i = 1; i <= userNumber; i++) {
        let ul = document.createElement('ul')
        let p = document.createElement('p')
        ul.setAttribute('id', 'user' + i)
        p.innerHTML = countCompletedTasksPerUser(i, tasklist)
        let parentId = i
        document.body.appendChild(p)
        document.body.appendChild(ul)
        tasklist[i].forEach(task => {
            let li = document.createElement('li')
            li.setAttribute('id', 'task' + task.id)
            let checkbox = document.createElement('input')
            checkbox.setAttribute('type', 'checkbox')
            checkbox.setAttribute('id', 'checkbox' + task.id)
            checkbox.setAttribute('name', 'checkbox' + task.id)
            checkbox.setAttribute('value', task.completed)
            checkbox.addEventListener("change", (e) => {
                if (e.target.checked) {
                    console.log("Checkbox is checked..");
                    updateTaskStatus(task.id, parentId)
                } else {
                    console.log("Checkbox is not checked..");
                    updateTaskStatus(task.id, parentId)
                }
            });
            if (task.completed === true) {
                checkbox.setAttribute('checked', 'checked')
            }
            li.appendChild(checkbox)
            li.appendChild(document.createTextNode(task.title))
            ul.appendChild(li)
        })
    }
}

function consoleGroup(userNumber, tasklist){
    for (let i = 1; i <= userNumber; i++) {
        console.group('User ' + usersList[i-1].id + ' - ' + usersList[i-1].name)
        tasklist[i].forEach(task => {
            if (task.completed === true) {
                console.log('%c' + task.title, 'color: green')
            }
            else {
                console.log('%c' + task.title, 'color: red')
            }
        })
        console.groupEnd()
    }
}

function countCompletedTasksPerUser(userId, tasklist){
    let count = 1
    tasklist[userId].forEach(task => {
        if (task.completed === true) {
            count++
        }
    })
    return 'User ' + usersList[userId-1].id + ' - ' + usersList[userId-1].name + ' completed ' + count + ' tasks out of ' + tasklist[userId].length
}

function updateTaskStatus(i){
    todoList[i-1].completed = !todoList[i-1].completed
    const myNode = document.getElementById("app");
    myNode.textContent = '';
    filterTable(todoList)

}