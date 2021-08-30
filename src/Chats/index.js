import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import ChatComponent from './ChatComponent';
import ListChatComponent from './ListChatComponent';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
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

  console.log(params.chatId);
  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  const [chatsArray, setChatsArray] = useState([]);

  const trimMessageText = inputMessage.trim();
  const numMessage = messageArray.length + 1;

  const onSendMessage = () => {
    if (trimMessageText !== '') {
      var message = {
        id: { numMessage },
        idChat: '1',
        autor: 'admin',
        avatar: '/static/images/avatar/2.jpg',
        text: trimMessageText,
        class: 'primaryMessage'
      };
      setMessageArray((prev) => [...prev, message]);
      setInputMessage('');
      // setChatsArray(chatsArray[params].messages.push(message));
      setTimeout(addAnswer, 3000);
    }
  };

  const addChat = () => {
    const newIdChat = chatsArray.length + 1;
    var chat = {
      idChat: { newIdChat },
      autor: `admin-${newIdChat}`,
      avatar: '/static/images/avatar/2.jpg',
      class: 'chat',
      messages: [{}],
    };
    setChatsArray((prev) => [...prev, chat]);
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
    setMessageArray((prev) => [...prev, answer]);
  };

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
          <ListChatComponent
            value={chatsArray}
            funcOnAddChat={ addChat }
          />
        </div>
      </Drawer>
      <main className={classes.content}>
            <Toolbar />
              <ChatComponent
                        value = { inputMessage }
                        funcSetInputMessage={ setInputMessage } 
                        funcOnSendMessage={onSendMessage}
                        statMessageArray={messageArray}
              />
      </main>
    </div>
  );
}

export default ChatsComponent;