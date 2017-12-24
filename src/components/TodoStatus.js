import React, {PureComponent} from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import AllIcon from 'material-ui-icons/Reorder';
import CloseIcon from 'material-ui-icons/RemoveCircle';
import DoneIcon from 'material-ui-icons/CheckCircle';

class TodoStatus extends PureComponent {
    render () {
        const {filter, todos, filterTodo} = this.props;
        console.log('render TodoStatus');
        return (
            <div className="to-do-status">
                <IconButton color={filter === 'All' ? 'accent' : 'default'} onClick={() => filterTodo('All')}>
                    <Badge badgeContent={todos.length} >
                        <AllIcon />
                    </Badge>
                </IconButton>
                <IconButton color={filter === 'Complete' ? 'accent' : 'default'} onClick={() => filterTodo('Complete')}>
                    <Badge badgeContent={todos.filter(todo => todo.status === 'Complete').length} >
                        <DoneIcon />
                    </Badge>
                </IconButton>
                <IconButton color={filter === 'Active' ? 'accent' : 'default'} onClick={() => filterTodo('Active')}>
                    <Badge badgeContent={todos.filter(todo => todo.status === 'Active').length} >
                        <CloseIcon />
                    </Badge>
                </IconButton>
            </div>
        );
    }
}

export default TodoStatus;