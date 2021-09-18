import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
}));

function NotFoundComponent() {
    const classes = useStyles();
  return (
    <div>
    <main className={classes.content}>
    <Toolbar />
      <h3>Not Found Page</h3>
      </main>
    </div>
  );
};

export default NotFoundComponent;