import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { addNewChat, enableChat } from './chatsSlice';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";


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
  itemchat: {
    textDecoration: "none",
    color: "inherit",
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: '90%',
    left: '80%',
    right: 0,
  },
  buttonListChat: {
    '& > *': {
      margin: theme.spacing(1),
    },
    zIndex: 100,
  },
  mainWrapper: {
    width: "100%",
    margin: "10px 0px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#F1F1F1",
    },
  },

  mainWrapperActive: {
    width: "100%",
    margin: "10px 0px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    cursor: "pointer",
    backgroundColor: "#F1F1F1",
  },

  midddleContentWrapper: {
    marginLeft: "15px",
    width: "65%",
    height: "100%",
  },

  rightContentWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "0px 10px",
    minWidth: '40px'
  },

  overFlowText: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    height: "30px",
  },
}));

const ListChatsComponent = () => {
  
  const classes = useStyles();
  const listChats = useSelector(state => state.chats.arrayChats);
  const idActiveChat = useSelector(state => state.chats.idActiveChat);
  const dispatch = useDispatch();

const addChat = () => {
    const newIdChat = listChats.length;
    var chat = {
      idChat: newIdChat,
      autor: `admin-${newIdChat}`,
      avatar: '/images/3.jpg',
      class: 'chat',
      messages: [],
      newNoViewMessage: 0
    };
    dispatch(addNewChat(chat));
  };

  const openChat = (id) => {
    dispatch(enableChat({ idChat: id}));
  };

  const formatDate = (timeStamp) => {
    const minutes = new Date(timeStamp).getMinutes();
    if (minutes < 10) return (`${new Date(timeStamp).getHours()} : 0${minutes}`);
    return (`${new Date(timeStamp).getHours()} : ${minutes}`);
  }

  const activeChat = (id) => {
    if (id === idActiveChat) return classes.mainWrapperActive;
    return classes.mainWrapper;
  } 

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>

          {listChats.map(({ idChat, autor, avatar, newNoViewMessage, lastMessage}) => (
            <React.Fragment key={idChat}>
              <Box key={idChat} className={activeChat(idChat)} onClick={(e) => openChat(idChat)}>
              {/* <Link to={link} className={ classes.itemchat } color="inherit"> */}
                <Avatar alt="Remy Sharp" src={avatar} />

                <Box className={classes.midddleContentWrapper}>
                  <Typography variant="h6" className={classes.overFlowText}>
                    {autor}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.overFlowText}>
                    {lastMessage !== undefined && lastMessage.text}
                  </Typography>
                </Box>

                <Box className={classes.rightContentWrapper}>
                  <Typography variant="caption">
                    {lastMessage !== undefined && formatDate(lastMessage.dateTime)}
                  </Typography>
                  <Typography variant="subtitle1">
                    {newNoViewMessage > 0 && newNoViewMessage}
                  </Typography>
                </Box>
              </Box>
          </React.Fragment>
          ))}

      </Paper>
      <Fab id="fabButton" onClick={addChat} color="primary" aria-label="edit" className={ classes.fabButton}>
          <EditIcon />
        </Fab>
    </React.Fragment>
  );
}

export default ListChatsComponent;
