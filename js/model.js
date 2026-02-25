const Model = {
    todos: [],

    addTodo(text) {
        this.todos.push({
            id: Date.now(),
            text,
            completed: false
        });
    },

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    },

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) todo.completed = !todo.completed;
    },

    updateTodo(id, newText) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) todo.text = newText;
    },

    getFilteredTodos(filter) {
        if (filter === 'completed') return this.todos.filter(t => t.completed);
        if (filter === 'pending') return this.todos.filter(t => !t.completed);
        return this.todos;
    }
};