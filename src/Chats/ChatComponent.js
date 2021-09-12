import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useSelector, useDispatch } from 'react-redux';
import { addNewMessage } from '../Chats/chatsSlice';
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

const contentWidth = '70%';
const useStyles = makeStyles((theme) => ({
  appBarTop: {
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    left: 'auto',
    right: 0,
    width: contentWidth,
    minHeight: "50px"
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paperchat: {
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'column'
  },
  subheaderchat: {
    backgroundColor: theme.palette.background.paper,
  },
  appbarchat: {
    top: 'auto',
    bottom: 0,
    width: contentWidth,
    backgroundColor: theme.palette.background.paper,
  },
  forminputchat: {
    margin: '0 auto',
    width: '100%',
  },
  inputchat: {
    width: '90%',
  },
  buttonchat: {
    height: '45px',
    width: '75px',
    left: '20px'
  },
  leftMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: "flex-start",
    width: '70%',
    border: '1px solid #c4c9cc',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: 'white'
  },
  rightMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: "flex-end",
    width: '70%',
    border: '1px solid #c4c9cc',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: 'white'
  },
  listItemText: {

  },
  listItemTime: {
    alignSelf: "flex-end",
    fontSize: '12px'
  },
  toolbarBottom: {
    minHeight: '0px',
  },
  content: {
    flexGrow: 1,
    padding: "75px 20px",
    },
}));

const ChatComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputMessage, setInputMessage] = useState('');

  const params = Number(props.idChat);
  const allListChat = useSelector(state => state.chats.arrayChats[params]);
  const trimMessageText = inputMessage.trim();

  const onSendMessage = () => {
    if (trimMessageText !== '') {
      var message = {
        id: allListChat.messages.length,
        idChat: params,
        autor: 'admin',
        text: trimMessageText,
        classMessage: classes.leftMessage,
        dateTime: Date.now()
      };
       
      dispatch(addNewMessage({
        idChat: params,
        newMessage: message
      }));
      setInputMessage('');
      setTimeout(addAnswer, 3000);
    }
  };

  const addAnswer = () => {
    var answer = {
      id: allListChat.messages.length,
      idChat: params,
      autor: 'autor',
      text: 'Answer',
      classMessage: classes.rightMessage,
      dateTime: Date.now()
    }
    dispatch(addNewMessage({
      idChat: params,
      newMessage: answer
    }));
  };
    return (
      <main className={classes.content}>
        <AppBar position="fixed" className={classes.appBarTop}>
        <Toolbar variant="dense" className={classes.toolBarTop}>
            <Typography> {allListChat.autor} </Typography>
        </Toolbar>
      </AppBar>
        <Box className={classes.paperchat}>
            {allListChat.messages.map(({ id, dateTime, text, classMessage }) => (
              <React.Fragment key={id}>
                <Box className={`${classMessage}`}>
                  <Typography className={classes.listItemText}>
                     {text}
                  </Typography>
                  <Typography  variant="subtitle1" className={classes.listItemTime}>
                    {new Date(dateTime).toTimeString().replace(/ .*/, '')}
                  </Typography>
                </Box>
              </React.Fragment>
            ))}
        </Box>
        <AppBar position="fixed" className={classes.appbarchat}>
          <Toolbar variant="dense" className={ classes.toolbarBottom }>
            <TextField
              className={classes.inputchat}
              label='Введите сообщение'
              inputRef={input => input && input.focus()}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={({ key }) => {
                if (key === 'Enter') { onSendMessage()};
              }}
            />
            <Button
              color="primary"
              variant="contained"
              className={classes.buttonchat}
              edge="end"
              onClick={onSendMessage}
            >
              <SendIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </main>
    );
}
export default ChatComponent;