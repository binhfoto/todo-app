import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Switch from 'material-ui/Switch';

const TodoList = ({todos, updateTodo}) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
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
                                            updateTodo(todo.id, checked);
                                        }}
                                    />
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