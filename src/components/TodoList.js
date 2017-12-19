import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Switch from 'material-ui/Switch';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';

const TodoList = ({todos, toggleTodo, updateTodo, deleteTodo}) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    todos.map(todo => {
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
                                        color="accent"
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