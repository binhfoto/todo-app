import React from 'react';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Switch from 'material-ui/Switch';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';

const TodoList = ({filter, todos, toggleTodo, updateTodo, deleteTodo}) => {
    const filterTodos = filter === 'All' ?
        todos :
        todos.filter(todo => todo.status === filter);
    return (
        <Table>
            <TableBody>
                {
                    filterTodos.map(todo => {
                        return (
                            <TableRow key={todo.id}>
                                <TableCell>{todo.name}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={todo.status !== 'Active'}
                                        onChange={(event, checked) => {
                                            toggleTodo(todo.id, checked);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        aria-label="Edit"
                                        color="primary"
                                        onClick={() => {updateTodo(todo)}}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        aria-label="Delete"
                                        color="gray"
                                        onClick={() => {deleteTodo(todo.id)}}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        );
                    })
                }
            </TableBody>
        </Table>
    );
};

export default TodoList;