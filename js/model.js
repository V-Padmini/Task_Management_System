const Model = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    },

    addTodo(text) {
        this.todos.push({
            id: Date.now(),
            text,
            completed: false
        });
        this.save();
    },

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.save();
    },

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
        }
    },

    updateTodo(id, newText) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.text = newText;
            this.save();
        }
    },

    getFilteredTodos(filter) {
        if (filter === 'completed') return this.todos.filter(t => t.completed);
        if (filter === 'pending') return this.todos.filter(t => !t.completed);
        return this.todos;
    }
};