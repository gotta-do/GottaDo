import React from 'react';
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

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const handleClick = (event: any) => {
  return null;
};

interface TaskListProps {
  title: string;
  ico: JSX.Element;
}

const handleKeypress = (e: React.KeyboardEvent) => {
  e.keyCode === 13 ? console.log('clicked') : console.log('not');
};

export default function TaskList({ title, ico }: TaskListProps) {
  const classes = useStyles();
  const [dense] = React.useState(true);
  // const [secondary] = React.useState(true);

  return (
    <div className={classes.root}>
      <List dense={dense}>
        <Toolbar>
          {ico}
          <ListSubheader className={classes.title}>{title}</ListSubheader>
        </Toolbar>
        <Paper className={classes.paper} variant='outlined'>
          <form
            className={classes.newTask}
            noValidate
            autoComplete='off'
            onKeyPress={(e) => handleKeypress(e)}
          >
            <Grid className={classes.formGrid}>
              <TextField id='newTask' label='Add to your list' fullWidth />
            </Grid>
          </form>
          {generate(
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={dense}
                    onChange={(event) => handleClick(event.target.checked)}
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
        </Paper>
      </List>
    </div>
  );
}
