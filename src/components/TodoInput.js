import React, {PureComponent} from 'react';
import TextField from 'material-ui/TextField';

class TodoInput extends PureComponent {

    componentWillReceiveProps ({editingTodo: {name = ''}}) {
        this.input.value = name;
        this.input.focus();
    }

    render () {
        console.log('render TodoInput');
        const {upsertTodo, editingTodo : {id, name}} = this.props;
        return (
            <TextField
                id="name"
                label="Name"
                margin="normal"
                defaultValue={name}
                inputRef={(input) => this.input = input}
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