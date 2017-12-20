import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoStatus from './TodoStatus';
import '../styles/index.css';

class TodoApp extends Component {
    constructor (props) {
        super(props);

        this.state = {
            todos: [
                this.createTodo('Shopping'),
                this.createTodo('Dating'),
                this.createTodo('Gaming')
            ],
            editingTodo: {},
            filter: 'All'
        };

        this.addTodo = this.addTodo.bind(this);
        this.upsertTodo = this.upsertTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.filterTodo = this.filterTodo.bind(this);
    }

    render () {
        return (
            <div className="to-do-app">
                <TodoInput upsertTodo={this.upsertTodo} editingTodo={this.state.editingTodo}/>
                <TodoStatus todos={this.state.todos} filterTodo={this.filterTodo}/>
                <TodoList filter={this.state.filter}
                          todos={this.state.todos}
                          toggleTodo={this.toggleTodo}
                          deleteTodo={this.deleteTodo}
                          updateTodo={this.updateTodo}/>

            </div>
        );
    }

    addTodo (name) {
        this.setState({
            todos: [this.createTodo(name), ...this.state.todos]
        });
    }

    createTodo (name) {
        return {
            id: Math.random(),
            name,
            status: 'Active'
        };
    }

    toggleTodo (id, checked) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.status = checked ? 'Complete' : 'Active';
            }
            return todo;
        });
        this.setState({todos});
    }

    updateTodo(todo) {
        this.setState({
            editingTodo: todo
        });
    }

    upsertTodo(id, name) {
        if (id) {
            let todos = this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.name = name;
                }
                return todo;
            });
            this.setState({
                todos
            });
        } else {
            this.addTodo(name);
        }
        this.setState({
            editingTodo: {}
        });
    }

    deleteTodo (id) {
        let todos = this.state.todos.filter(todo => {
            if (todo.id !== id) {
                return todo;
            }
        });
        this.setState({
            todos
        });
    }

    filterTodo (filter) {
        this.setState({
            filter
        })
    }
}

export default TodoApp;