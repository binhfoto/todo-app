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
    }

    render () {
        return (
            <div className="to-do-app">
                <TodoInput upsertTodo={this.upsertTodo}
                           editingTodo={this.state.editingTodo}/>
                <TodoStatus filter={this.state.filter}
                            todos={this.state.todos}
                            filterTodo={this.filterTodo}/>
                <TodoList filter={this.state.filter}
                          todos={this.state.todos}
                          toggleTodo={this.toggleTodo}
                          deleteTodo={this.deleteTodo}
                          updateTodo={this.updateTodo}/>

            </div>
        );
    }

    addTodo = (name) => {
        this.setState({
            todos: [this.createTodo(name), ...this.state.todos]
        });
    };

    createTodo = (name) => {
        return {
            id: Math.random(),
            name,
            status: 'Active'
        };
    };

    toggleTodo = (id, checked) => {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.status = checked ? 'Complete' : 'Active';
            }
            return todo;
        });
        this.setState({todos});
    };

    updateTodo = (todo) => {
        if (todo !== this.state.editingTodo) {
            this.setState({
                editingTodo: todo
            });
        }
    };

    upsertTodo = (id, name) => {
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
    };

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    filterTodo = (filter) => {
        this.setState({
            filter
        })
    };
}

export default TodoApp;