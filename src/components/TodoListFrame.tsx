import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  List,
  ListSubheader,
  Paper,
  TextField,
  Toolbar,
} from '@material-ui/core';
import { TodoListFrameProps } from '../types/types';
// import TodoList from './TodoList';
import { createTodoActionCreator } from '../redux-toolkit/redux-toolkit';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';
import TodoList from './TodoList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontSize: '10px',
    },
    tasks: {},
    title: {
      margin: theme.spacing(0),
    },
    formGrid: {},
    paper: {
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      overflowY: 'auto',
      minHeight: theme.spacing(2) * 19.5,
      maxHeight: theme.spacing(2) * 19.5,
    },

    checkedTask: {
      textDecoration: 'line-through',
    },
    list: {
      marginRight: '27px',
    },
  }),
);

export default function TodoListFrame({
  title,
  ico,
  type,
  todos,
}: TodoListFrameProps) {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState('');

  const classes = useStyles();

  const handleAddTodo = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.keyCode === 13) {
      // event.preventDefault();
      const value = (event.target as HTMLInputElement).value;
      dispatch(
        createTodoActionCreator({
          id: uuid(),
          isDone: false,
          task: value,
          type: type,
        }),
      );
      setNewTodo('');
    }
  };

  return (
    <List className={classes.list} dense>
      <Toolbar>
        {ico}
        <ListSubheader className={classes.title}>{title}</ListSubheader>
      </Toolbar>
      <Paper className={classes.paper} variant='outlined'>
        <Grid container className={classes.formGrid}>
          <TextField
            label='Add to your list'
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            onKeyDown={handleAddTodo}
            variant='filled'
            fullWidth
          />
          <TodoList type={type} todos={todos} />
        </Grid>
      </Paper>
    </List>
  );
}
