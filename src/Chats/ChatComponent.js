import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useSelector, useDispatch } from 'react-redux';
import { addNewMessage } from '../Chats/chatsSlice';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paperchat: {
    marginBottom: 50,
  },
  listchat: {
    paddingBottom: '0px',
    paddingTop: '0px'
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
  },
  listItemPrimary: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  listItem: {
    width: '100%',
  }
}));

const ChatComponent = (props) => {
  const classes = useStyles();
  const [inputMessage, setInputMessage] = useState('');

  const params = Number(useParams().chatId);

  const listMessages = useSelector(state => state.chats.arrayChats[params - 1].messages);
  const dispatch = useDispatch();

  const trimMessageText = inputMessage.trim();
  const numMessage = listMessages.length + 1;

  const onSendMessage = () => {
    if (trimMessageText !== '') {
      var message = {
        id: numMessage,
        idChat: params,
        autor: 'admin',
        text: trimMessageText,
        class: 'classes.answerMessage',
        dateTime: Date.now()
      };
       
      dispatch(addNewMessage({
        idChat: params - 1,
        newMessage: message
      }));
      setInputMessage('');
      setTimeout(addAnswer, 3000);
    }
  };

  const addAnswer = () => {
    var answer = {
      id: { numMessage },
      idChat: '1',
      autor: 'autor',
      text: 'Answer',
      classMessage: 'classes.answerMessage',
      dateTime: Date.now()
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
            {listMessages.map(({ id, dateTime, text}) => (
              <React.Fragment key={id}>
                <ListItem className={classes.listItemPrimary}>
                  <ListItemText className={classes.listItem} secondary={new Date(dateTime).toTimeString().replace(/ .*/, '')}/>
                  <ListItemText className={classes.listItem} primary={text} />
                </ListItem>
                <Divider />
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