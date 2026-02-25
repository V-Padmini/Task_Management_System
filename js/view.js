const View = {
    render(todos) {
        const list = document.getElementById('todo-list');
        list.innerHTML = '';

        todos.forEach(todo => {
            const div = document.createElement('div');
            div.className = 'task-card';

            div.innerHTML = `
                <div class="task-left">
                    <input type="checkbox" data-id="${todo.id}" ${todo.completed ? 'checked' : ''}>
                    <span class="task-text ${todo.completed ? 'completed' : ''}">
                        ${todo.text}
                    </span>
                </div>
                <div class="task-actions">
                    <button class="edit-btn" data-id="${todo.id}">Edit</button>
                    <button class="remove-btn" data-id="${todo.id}">Delete</button>
                </div>
            `;

            list.appendChild(div);
        });
    }
};