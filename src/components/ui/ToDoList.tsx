import {
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { IToDo, ToDoListProps } from '../../interfaces/interfaces';
import DeleteIcon from '@material-ui/icons/Delete';

const userStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Blank
  }),
);

export default function ToDoList({ type, toDos }: ToDoListProps) {
  const deleteTodo = (index: number) => {};

  return (
    <List dense>
      {toDos.map((el: IToDo, index) => (
        <ListItem>
          <ListItemText primary={el.task} />
          <ListItemSecondaryAction>
            <IconButton
              edge='end'
              aria-label='delete'
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
