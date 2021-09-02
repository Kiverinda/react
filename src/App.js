import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProfileComponent from "./Profile";
import ChatsComponent from "./Chats";
import NotFoundComponent from "./NotFoundComponent"
import HomeComponent from "./Home";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
  },
  titlemenu: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
    linkbuttonmenu: {
      marginRight: theme.spacing(2),
      textDecoration: "none",
      color: "inherit",
      fontSize: "18px"
    },
}));


const App = () => {
  const classes = useStyles();

return (
  <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link className={classes.titlemenu} to="/"><h2>Chat-training project</h2></Link>
          <Link to="/chats" className={classes.linkbuttonmenu}>Chats</Link>
          <Link to="/profile" className={classes.linkbuttonmenu}>Profile</Link>
        </Toolbar>
      </AppBar>
          <Switch>
            <Route exact path="/chat/:chatId">
              <ChatsComponent />
            </Route>
            
            <Route exact path="/chats">
              <ChatsComponent />
            </Route>
      
            <Route exact path="/profile">
                <ProfileComponent />
            </Route>
      
            <Route exact path="/">
              <HomeComponent />
            </Route>
      
            <Route>
              <NotFoundComponent />
            </Route>
          
      </Switch>
      </div>
    </Router>
  );
};

export default App;