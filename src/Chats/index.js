import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import ChatComponent from './ChatComponent';
import ListChatComponent from './ListChatComponent';
import { Redirect, useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Link
} from "react-router-dom";



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

const ChatsComponent = (props) => {
  
  const params = Number(useParams().chatId);
  const listChats = useSelector(state => state.chats.arrayChats);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Typography className={classes.titlemenu} variant="h6" noWrap>
                Chat-training project
            </Typography>
                <Button className={classes.buttonmenu} color="inherit"><Link to="/profile">Login</Link></Button>
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
        {params > listChats.length &&
        <Redirect to="/chats" />
        }
        {params > 0 &&
          <>
          {params <= listChats.length && <ChatComponent />}
          </>
        }
      </main>
    </div>
  );
}

export default ChatsComponent;