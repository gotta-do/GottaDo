import React, {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  ListSubheader,
  Paper,
  TextField,
  Toolbar,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,

      // maxWidth: 752,
    },
    tasks: {},
    title: {
      margin: theme.spacing(0),
    },
    formGrid: {
      justifyContent: 'flexStart',
    },
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

    newTask: {
      '& > *': {
        margin: theme.spacing(2),
        // width: '40ch',
        justifyContent: 'flex-end',
      },
    },
  }),
);

const handleClick = (event: React.FormEvent<HTMLInputElement>) => {
  console.log("checked")
}


function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

interface TaskListProps {
  title: string;
  ico: JSX.Element;
}

type ToDoType = "short" || "long" || "note";

interface IToDo {
    label: string,
    isChecked: boolean,
    type: ToDoType,
}
const todos: IToDo[];


export default function TaskList({ title, ico }: TaskListProps) {
  const classes = useStyles();
  // const [dense] = React.useState(true);
  // const [secondary] = React.useState(true);
  const [task, setTask] = useState([]);
  const [done, setDone] = useState(false);

// const handleNewTask = (event: KeyboardEvent) => {
//   if (event.keyCode === 13) {
//     event.stopPropagation();
// event.preventDefault();
//     setTask(event.target.value);
//     console.log('clicked') ;
//   };
// };




  return (
    <div className={classes.root}>
      <List dense>
        <Toolbar>
          {ico}
          <ListSubheader className={classes.title}>{title}</ListSubheader>
        </Toolbar>
        <Paper className={classes.paper} variant='outlined'>
          <form
            className={classes.newTask}
            noValidate
            autoComplete='off'
          >
            <Grid className={classes.formGrid}>
              <TextField 
              id='task' 
              // multiline
              label='Add to your list' 
              value={task} 
              onChange={event=>setTask(event.target.value)}
              fullWidth 
              />
            </Grid>
          {generate(
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={dense}
                    value={done}
                    onChange={(event) => setDone(true)}
                  />
                }
                label={false}
              />
              <ListItemText
                primary='note title'
                // secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>,
          )}
          </form>
        </Paper>
      </List>
    </div>
  );
}
