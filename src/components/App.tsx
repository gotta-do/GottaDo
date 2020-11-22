import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './ui/Header';
import { DonutLarge, DonutSmall, ShortText } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import Footer from './ui/Footer';
import TodoListFrame from './ui/TodoListFrame';
// import { todoArray } from '../data/data';
import { ITodo, IState } from '../types/types';

import {
  createTodoActionCreator,
  editTodoActionCreator,
  toggleCheckedActionCreator,
  deleteTodoActionCreator,
  selectedTodoActionCreator,
} from '../redux-toolkit/redux-toolkit';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
    },

    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
    },
    title: {
      margin: theme.spacing(1),
    },
    footer: {
      textAlign: 'center',
      marginTop: theme.spacing(1),
    },
  }),
);

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.todos);

  // const selectedTodoID = useSelector((state: IState) => state.selectedTodo);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth='md'>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TodoListFrame
              title='Today or tomorrow'
              ico={<DonutSmall />}
              type='short-term'
              todos={todos}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TodoListFrame
              title='Longer term'
              ico={<DonutLarge />}
              type='long-term'
              todos={todos}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <TodoListFrame
            title='Random notes'
            ico={<ShortText />}
            type='note'
            todos={todos}
          />
        </Grid>
        <Grid container justify='center'>
          <Footer />
        </Grid>
      </Container>
    </div>
  );
}
