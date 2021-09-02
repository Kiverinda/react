import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';
import { addNewChat } from '../Chats/chatsSlice';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
      left: 0,
    right: 'auto',
    width: '58vh'
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  itemchat: {
    textDecoration: "none",
    color: "inherit",
  }
}));

const ListChatComponent = () => {
  const classes = useStyles();
  const listChats = useSelector(state => state.chats.arrayChats);
  const dispatch = useDispatch();
  
  const addChat = () => {
    const newIdChat = listChats.length + 1;
    var chat = {
      idChat: newIdChat,
      link: `../chat/${newIdChat}`,
      autor: `admin-${newIdChat}`,
      avatar: '/static/images/avatar/2.jpg',
      class: 'chat',
      messages: []
    };
    dispatch(addNewChat(chat));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <List className={classes.list}>
          {listChats.map(({ idChat, link, autor, avatar}) => (
            <React.Fragment key={idChat}>
              <Link to={link} className={ classes.itemchat } color="inherit">
            <ListItem button>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={avatar} />
              </ListItemAvatar>
              <ListItemText primary={autor} />
              </ListItem>
            </Link>
          </React.Fragment>
          ))}
        </List>
          </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBarBottom}>
      <Toolbar>
              <Fab onClick={addChat} color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
        </Toolbar>
          </AppBar>
    </React.Fragment>
  );
}

export default ListChatComponent;
