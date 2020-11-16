import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import './App.css';
import LongTasks from './components/LongTasks';
import ShortTasks from './components/ShortTasks';
import NotesList from './components/TaskList';
import { Add, DonutLarge, DonutSmall, ShortText } from '@material-ui/icons';
import { Container, Icon } from '@material-ui/core';
import TaskList from './components/TaskList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      // maxWidth: '75%',
    },
    wrapper: {
      maxWidth: '75vh',
      minHeight: '100vh',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: theme.spacing(2),
      // margin: '10px 20px',
    },
    title: {
      margin: theme.spacing(1),
    },
  }),
);

// const icn = (): JSX.Element => {
//   return <Add />;
// };

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container
        maxWidth="md"
        // className={classes.wrapper}
        // container
        // spacing={0}
        // direction="row"
        // alignItems="center"
        // justify="center"
      >
        <Grid item xs={12} md={12}>
          <TaskList
            title="Things to do today or tomorrow"
            ico={<DonutSmall />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TaskList title="Things to do longer term" ico={<DonutLarge />} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TaskList title="Random notes" ico={<Add />} />
        </Grid>
      </Container>
    </div>
  );
}
