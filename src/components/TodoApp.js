import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import '../styles/index.css';

class TodoApp extends Component {
    constructor (props) {
        super(props);

        this.state = {
            todos: [
                this.createTodo('Shopping'),
                this.createTodo('Dating'),
                this.createTodo('Gaming')
            ]
        };

        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    render () {
        return (
            <div className="to-do-app">
                <TodoInput addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos} updateTodo={this.updateTodo}/>
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
        }
    }

    updateTodo (id, checked) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.status = checked ? 'Complete' : 'Active';
            }
            return todo;
        });
        this.setState({todos});
    }
}

export default TodoApp;