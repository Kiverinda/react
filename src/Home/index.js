import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
}));

function HomeComponent() {
    const classes = useStyles();
  return (
    <>
    <main className={classes.content}>
    <Toolbar />
      <h3>Home Page</h3>
      </main>
    </>
  );
};

export default HomeComponent;