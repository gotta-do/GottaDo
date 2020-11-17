import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  ListSubheader,
  Paper,
  TextField,
  Toolbar,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

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
    paper: {
      // padding: theme.spacing(1),
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      overflowY: 'auto',
      minHeight: theme.spacing(2) * 20,
      maxHeight: theme.spacing(2) * 20,
    },

    newTask: {
      '& > *': {
        margin: theme.spacing(2),
        width: '40ch',
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
        <Paper className={classes.paper} variant="outlined">
          <form className={classes.newTask} noValidate autoComplete="off">
            <TextField id="newTask" label="Add to your list" fullWidth />
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
                primary="note title"
                // secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>,
          )}
        </Paper>
      </List>
    </div>
  );
}
