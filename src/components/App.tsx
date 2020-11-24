import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import { DonutLarge, DonutSmall, ShortText } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import Footer from './Footer';
import { State } from '../types/types';
import { useSelector } from 'react-redux';
import TodoListFrame from './TodoListFrame';

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
    // hover: {
    //   height: '100px',
    //   width: '100px',
    //   background: 'red',
    //   position: 'absolute',
    //   top: '100px',
    //   left: '330px',
    // },
  }),
);

export default function App() {
  const todos = useSelector((state: State) => state.todos);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div className={classes.hover}></div> */}
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
