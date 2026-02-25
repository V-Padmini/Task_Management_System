document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('todo-list');
    const filter = document.getElementById('filter-dropdown');
    const counter = document.getElementById('task-counter');

    let currentFilter = 'all';

    function render() {
        const todos = Model.getFilteredTodos(currentFilter);
        View.render(todos);

        const pending = Model.todos.filter(t => !t.completed).length;
        counter.textContent = `You have ${pending} task(s) to complete`;
    }

    addBtn.addEventListener('click', () => {
        const text = input.value.trim();
        if (text) {
            Model.addTodo(text);
            input.value = '';
            render();
        }
    });

    list.addEventListener('click', (e) => {
        const id = Number(e.target.dataset.id);

        if (e.target.type === 'checkbox') {
            Model.toggleTodo(id);
        }

        if (e.target.classList.contains('remove-btn')) {
            Model.removeTodo(id);
        }

        if (e.target.classList.contains('edit-btn')) {
            const newText = prompt('Edit task');
            if (newText) Model.updateTodo(id, newText);
        }

        render();
    });

    filter.addEventListener('change', e => {
        currentFilter = e.target.value;
        render();
    });

    render();
});