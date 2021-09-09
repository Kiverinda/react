import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import ChatComponent from './ChatComponent';
import ListChatComponent from './ListChatComponent';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuListComposition from '../AppBarComponent/MenuListComposition';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

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
}));

const ChatsComponent = (props) => {

  const isActiveChat = useSelector(state => state.chats.isActiveChat);
  const idActiveChat = useSelector(state => state.chats.idActiveChat);
  const classes = useStyles();

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
            <MenuListComposition />
          <Button variant="outlined" className={classes.buttonSearch}>
              <SearchIcon />
              Поиск
          </Button>
        </Toolbar>
      </AppBar>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <ListChatComponent />
        </div>
      </Drawer>
        {isActiveChat && <ChatComponent idChat={ idActiveChat } />}
    </div>
  );
}

export default ChatsComponent;