import React, { useState, useEffect } from 'react';
import InputMessageComponent from './InputMessageComponent';
import MessageListComponent from './MessageListComponent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ListChatsComponent from './ListChatsComponent';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: '400px',
    height: '600px',
    border: '1px solid rgb(248, 211, 166)',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'bisque'
  },
  button: {
    margin: "12px 0px",
},
}));

function App() {
  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  const [chatsArray, setChatsArray] = useState([]);
  
  const classes = useStyles();
  const trimMessageText = inputMessage.trim();

  const onSendMessage = () => {
    if (trimMessageText !== '') {
      var message = {
        text: trimMessageText,
        autor: 'admin'
      };
      setMessageArray((prev) => [...prev, message]);
      setInputMessage('');
      setTimeout(addAnswer, 3000);
    }
  };


  const addAnswer = () => {
    var answer = {
      autorAnswer: 'autor',
      textAnswer: 'text'
    }
    setMessageArray((prev) => [...prev, answer]);
  };

  useEffect(() => {
    for (var item = 1; item < 3; item++) {
      var chat = {
        name: `Chat-${item}`,
        id: `${ item }`,
      };
      setChatsArray((prev) => [...prev, chat]);
    }
  }, []);

  return (
    <div className={classes.mainWrapper}>
      <ListChatsComponent
        chatsList={ chatsArray }
      />
      < MessageListComponent
        statMessageArray={messageArray}
      />
      < div className = 'inputWrapper' >
        < InputMessageComponent
          value = { inputMessage }
          funcSetInputMessage={ setInputMessage } 
          // funcSetMessageArray={setMessageArray}
          funcOnSendMessage={onSendMessage}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={onSendMessage}
          classes={{
            root: classes.button
          }}
        >
          <SendIcon />
          </Button>
      </div>
    </div>
  );
};

export default App;
