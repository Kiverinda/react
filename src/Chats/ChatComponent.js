import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useSelector, useDispatch } from 'react-redux';
import { addNewMessage } from '../Chats/chatsSlice';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paperchat: {
    paddingBottom: 50,
  },
  listchat: {
    marginBottom: theme.spacing(2),
  },
  subheaderchat: {
    backgroundColor: theme.palette.background.paper,
  },
  appbarchat: {
    top: 'auto',
    bottom: 0,
    width: 'calc(100% - 58vh)',
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
  }
}));

const ChatComponent = (props) => {
  const classes = useStyles();
  const [inputMessage, setInputMessage] = useState('');

  const params = Number(useParams().chatId);

  const listMessages = useSelector(state => state.chats.arrayChats[params-1].messages);
  const dispatch = useDispatch();

console.log(listMessages)

  const trimMessageText = inputMessage.trim();
  const numMessage = listMessages.length + 1;

  const onSendMessage = () => {
     if (trimMessageText !== '') {
      var message = {
        id: numMessage,
        idChat: params,
        autor: 'admin',
        text: trimMessageText,
        class: 'primaryMessage'
      };
       
      dispatch(addNewMessage({
        idChat: params - 1,
        newMessage: message
      }));
      setInputMessage('');
      setTimeout(addAnswer, 3000);
      console.log(listMessages)
     }
  };

  const addAnswer = () => {
    var answer = {
      id: { numMessage },
      idChat: '1',
      autor: 'autor',
      avatar: '',
      text: 'Answer',
      class: 'answerMessage'
    }
    dispatch(addNewMessage({
      idChat: params - 1,
      newMessage: answer
    }));
  };

    return (
      <React.Fragment>
        <CssBaseline />
        <Paper square className={classes.paperchat}>
          <List className={classes.listchat}>
            {listMessages.map(({ id, autor, avatar, text }) => (
              <React.Fragment key={id}>
                <ListItem className={classes.primaryMessage}>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={autor} secondary={text} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
        <AppBar position="fixed" className={classes.appbarchat}>
          <Toolbar>
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
      </React.Fragment>
    );
}
export default ChatComponent;