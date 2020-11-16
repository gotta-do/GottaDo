import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  Checkbox,
  FormControlLabel,
  ListSubheader,
  Paper,
  Toolbar,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // maxWidth: 752,
    },
    tasks: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      // margin: theme.spacing(0, 0, 0),
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight: '41vh',
      // margin: '10px 20px',
    },
    // title: {
    //   margin: theme.spacing(1),
    // },
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
  const [secondary] = React.useState(true);
  // const icn = (): JSX.Element => {
  //   return <Icon>Add</Icon>;
  // };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined">
        {/* <Grid container spacing={1}> */}
        <Grid item xs={12} md={6}>
          {/* <div className={classes.tasks}> */}
          <List dense={dense}>
            <Toolbar>
              {ico}
              <ListSubheader
              // className={classes.title}
              >
                {title}
              </ListSubheader>
            </Toolbar>
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
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>,
            )}
          </List>
          {/* </div> */}
        </Grid>
      </Paper>
      {/* </Grid> */}
    </div>
  );
}