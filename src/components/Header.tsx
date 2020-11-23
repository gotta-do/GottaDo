import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import logo from '../assets/white-Logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
    },
    header: {
      // color: theme.palette.error,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marging: '120px',
    },
    logo: {
      marginTop: '20px',
      marginBottom: '20px',
      marginRight: '20px',
    },
  }),
);

export default function AppTitle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position='static' color='secondary'>
        <Toolbar>
          <img src={logo} alt='logo' className={classes.logo} />
          <Typography variant='h6' className={classes.title}></Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
