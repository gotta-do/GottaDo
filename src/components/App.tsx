import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './ui/Header';
import { DonutLarge, DonutSmall, ShortText } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import Footer from './ui/Footer';
import ToDoListFrame from './ui/ToDoListFrame';
import { toDoArray } from '../data/data';
import { IToDo } from '../interfaces/interfaces';

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
  const classes = useStyles();
  const [toDos, setToDos] = useState(toDoArray);

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth='md'>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <ToDoListFrame
              title='Today or tomorrow'
              ico={<DonutSmall />}
              type='short-term'
              toDos={toDos}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ToDoListFrame
              title='Longer term'
              ico={<DonutLarge />}
              type='long-term'
              toDos={toDos}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <ToDoListFrame
            title='Random notes'
            ico={<ShortText />}
            type='note'
            toDos={toDos}
          />
        </Grid>
        <Grid container justify='center'>
          <Footer />
        </Grid>
      </Container>
    </div>
  );
}
