import {
  Checkbox,
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import {
  toggleCheckedActionCreator,
  deleteTodoActionCreator,
} from '../redux-toolkit/redux-toolkit';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { State, Todo, TodoListProps } from '../types/types';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: '100%',
    },
  }),
);

export default function TodoList({ type }: TodoListProps) {
  const dispatch = useDispatch();
  const todos = useSelector((state: State) => state.todos);
  const classes = useStyles();

  return (
    <List dense className={classes.list}>
      {todos.map((todo: Todo, index) =>
        type === todo.type ? (
          <ListItem>
            <Checkbox
              checked={todo.isDone}
              onChange={() =>
                dispatch(
                  toggleCheckedActionCreator({
                    id: todo.id,
                    isDone: !todo.isDone,
                    task: todo.task,
                    type: todo.type,
                  }),
                )
              }
            />
            <ListItemText primary={todo.task} />
            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                onClick={() =>
                  dispatch(
                    deleteTodoActionCreator({
                      id: todo.id,
                      isDone: todo.isDone,
                      task: todo.task,
                      type: todo.type,
                    }),
                  )
                }
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ) : null,
      )}
    </List>
  );
}
