import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ListSubheader, Paper, TextField, Toolbar } from '@material-ui/core';
import { TodoListFrameProps } from '../../types/types';
import TodoList from './TodoList';
import { deleteTodoActionCreator } from '../../redux-toolkit/redux-toolkit';
import { useSelector, useDispatch } from 'react-redux';

import { v1 as uuid } from 'uuid';

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
      // padding: theme.spacing(1),
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
  }),
);

export default function TodoListFrame({
  title,
  ico,
  type,
  todos,
}: TodoListFrameProps) {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState('default');

  const classes = useStyles();

  const handleAddTodo = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    const value = (event.target as HTMLInputElement).value;
    dispatch(
      deleteTodoActionCreator({
        id: uuid(),
        isDone: false,
        task: newTodo,
        type: type,
      }),
    );
  };

  return (
    <div className={classes.root}>
      {/* <List dense> */}
      <Toolbar>
        {ico}
        <ListSubheader className={classes.title}>{title}</ListSubheader>
      </Toolbar>
      <Paper className={classes.paper} variant='outlined'>
        <Grid container className={classes.formGrid}>
          <TextField
            label='Add to your list'
            // value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            onKeyDownCapture={handleAddTodo}
            variant='filled'
            fullWidth
          />
          <TodoList type={type} todos={todos} />
        </Grid>
      </Paper>
      {/* </List> */}
    </div>
  );
}
