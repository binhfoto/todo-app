import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class TodoInput extends Component {

    constructor (props) {
        super(props);
        this.state = {
            value: props.editingTodo.name
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({
            value: e.target.value
        });
    }

    componentWillReceiveProps ({editingTodo: todo}) {
        this.setState({
            value: todo.name
        })
    }

    render () {
        const {upsertTodo, editingTodo : {id}} = this.props;
        return (
            <TextField
                id="name"
                label="Name"
                margin="normal"
                value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        upsertTodo(id, e.target.value);
                        e.target.value = '';
                        e.preventDefault();
                    }
                }}
            />
        );
    }
}

export default TodoInput;