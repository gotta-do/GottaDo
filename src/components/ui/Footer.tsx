import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Copyright } from '@material-ui/icons';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   flexGrow: 1,
      //   minHeight: '100vh',
      //   backgroundColor: theme.palette.background.paper,
      //   color: theme.palette.text.secondary,
    },

    // paper: {
    //   padding: theme.spacing(1),
    //   textAlign: 'center',
    // },
    // title: {
    //   margin: theme.spacing(1),
    // },
    // footer: {
    //   textAlign: 'center',
    //   marginTop: theme.spacing(1),
    // },
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    // <Container maxWidth="md">
    <Grid container justify="center">
      <Typography variant="caption">Developed by Skotsson.  </Typography>
      {/* <Copyright fontSize="small" />
      <Typography variant="caption">2020</Typography> */}
    </Grid>
    // </Container>
  );
}
