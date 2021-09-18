import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import ChatComponent from '../Chats/ChatComponent';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openComponentLeftBar } from '../Home/homeSlice';
import SettingComponent from './SettingComponent';

const drawerWidth = '30%';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarTop: {
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    left: 0,
    right: 'auto',
    width: drawerWidth,
    minHeight: "50px"
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
    buttonSearch: {
      color: "#c4c9cc",
      width: "85%",
      borderRadius: '20px',
  },
  toolBarTop: {
    [theme.breakpoints.up('sm')]: {
      minHeight: "50px",
      paddingLeft: '0px',
    },
  },
  buttonBack: {
    border: 'none',
    marginRight: '20px'
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold'
  }

}));

const ProfileComponent = (props) => {

  const isActiveChat = useSelector(state => state.chats.isActiveChat);
  const idActiveChat = useSelector(state => state.chats.idActiveChat);
  const dispath = useDispatch();
  const classes = useStyles();

  const profileClose = () => {
    dispath(openComponentLeftBar('chats'))
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <AppBar position="fixed" className={classes.appBarTop}>
        <Toolbar variant="dense" className={classes.toolBarTop}>
          <Button onClick={profileClose} variant="outlined" className={classes.buttonBack}>
              <ArrowBackIcon className={classes.iconBack}/>
            </Button>
            <Typography className={classes.title}>Edit profile</Typography>
        </Toolbar>
      </AppBar>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <SettingComponent />
        </div>
      </Drawer>
        {isActiveChat && <ChatComponent idChat={ idActiveChat } />}
    </div>
  );
}

export default ProfileComponent;