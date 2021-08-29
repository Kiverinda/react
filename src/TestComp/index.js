import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChatComponent from './ChatComponent';
import ListChatComponent from './ListChatComponent';
import Button from '@material-ui/core/Button';

const drawerWidth = '58vh';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      display: 'flex',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
      overflow: 'auto',
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

const TestComp = (props) => {
  
    console.log(props);
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Typography className={classes.titlemenu} variant="h6" noWrap>
                Chat-training project
            </Typography>
                <Button href="/profile" className={classes.buttonmenu} color="inherit">Login</Button>
            </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
            <ListChatComponent />
        </div>
      </Drawer>
      <main className={classes.content}>
            <Toolbar />
              <ChatComponent
                value = { props.value }
                funcSetInputMessage={ props.funcSetInputMessage } 
                funcOnSendMessage={props.funcOnSendMessage}
                statMessageArray={props.statMessageArray}
              />
      </main>
    </div>
  );
}

export default TestComp;