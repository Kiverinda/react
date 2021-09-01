import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as 
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      display: 'flex',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
    titlemenu: {
        flexGrow: 1,
    },
    buttonmenu: {
        marginRight: theme.spacing(2),
    }
}));

function NotFoundComponent() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Typography className={classes.titlemenu} variant="h6" noWrap>
                <Link to="/">Chat-training project</Link>
            </Typography>
            <Button className={classes.buttonmenu} color="inherit"><Link to="/profile">Login</Link></Button>
          </Toolbar>
      </AppBar>
    <main className={classes.content}>
    <Toolbar />
      <h3>Not Found Page</h3>
      </main>
      </div>
  );
};

export default NotFoundComponent;