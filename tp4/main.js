"use strict";

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        res.json().then(todos => {
            // Exercise 1
            const todosCompleted = todos.filter(todo => todo.completed).length;
            console.log(`Nombre de todos complétées : ${ todosCompleted }`);


            // Exercise 2
            todos.forEach((todo, index) => {
                if (todo.id === index + 1) {
                    console.group(todo.userId);
                    console.log(todo.completed ? `✅️ ${ todo.title }` : `🟩 ${ todo.title }`);
                    console.groupEnd();
                }
            });

            // Exercise 3
            // List todos on HTML with checkbox and display user id
            let html = '';
            todos.forEach((todo, i) => {
                html += `
                        <span>${ todo.userId }</span>
                        <div>
                            <input type="checkbox" ${ todo.completed ? 'checked' : '' } id="todo-${ i }">
                            <label for="todo-${ i }">${ todo.title }</label>
                        </div>`;
            });
            document.getElementById('todos').innerHTML = html;
        });
    });
