import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import AllIcon from 'material-ui-icons/Reorder';
import CloseIcon from 'material-ui-icons/RemoveCircle';
import DoneIcon from 'material-ui-icons/CheckCircle';

const TodoStatus = ({todos, filterTodo}) => {
    return (
        <div className="to-do-status">
            <IconButton color="gray" onClick={() => filterTodo('All')}>
                <Badge badgeContent={todos.length} >
                    <AllIcon />
                </Badge>
            </IconButton>
            <IconButton color="primary" onClick={() => filterTodo('Complete')}>
                <Badge badgeContent={todos.filter(todo => todo.status === 'Complete').length} >
                    <DoneIcon />
                </Badge>
            </IconButton>
            <IconButton color="accent" onClick={() => filterTodo('Active')}>
                <Badge badgeContent={todos.filter(todo => todo.status === 'Active').length} >
                    <CloseIcon />
                </Badge>
            </IconButton>
        </div>
    );
};

export default TodoStatus;