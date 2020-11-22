import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ListSubheader, Paper, TextField, Toolbar } from '@material-ui/core';
import { ToDoListFrameProps } from '../../interfaces/interfaces';
import ToDoList from './ToDoList';

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

export default function TaskList({
  title,
  ico,
  type,
  toDos,
}: ToDoListFrameProps) {
  const classes = useStyles();

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
            // onKeyDown={handleNewTask}
            variant='filled'
            fullWidth
          />
          <ToDoList type={type} toDos={toDos} />
        </Grid>
      </Paper>
      {/* </List> */}
    </div>
  );
}
