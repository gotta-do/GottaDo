import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import './App.css';
import LongTasks from './components/LongTasks';
import ShortTasks from './components/ShortTasks';
import NotesList from './components/TaskList';
import {
  Add,
  Copyright,
  DonutLarge,
  DonutSmall,
  ShortText,
} from '@material-ui/icons';
import { Box, Container, Icon, Toolbar, Typography } from '@material-ui/core';
import TaskList from './components/TaskList';

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

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TaskList title="Today or tomorrow" ico={<DonutSmall />} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TaskList title="Longer term" ico={<DonutLarge />} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <TaskList title="Random notes" ico={<Add />} />
        </Grid>

        <Grid container justify="center">
          <Copyright fontSize="small" />
          <Typography>Skotsson, 2020</Typography>
        </Grid>
      </Container>
    </div>
  );
}
