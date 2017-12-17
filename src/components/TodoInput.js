import React from 'react';
import TextField from 'material-ui/TextField';

const TodoInput = (props) => {
    return (
        <TextField
            id="name"
            label="Name"
            margin="normal"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    props.addTodo(e.target.value);
                    e.target.value = '';
                    e.preventDefault();
                }
            }}
        />
    );
};

export default TodoInput;