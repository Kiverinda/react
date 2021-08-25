import React, { useState } from 'react';
import InputMessageComponent from './InputMessageComponent';
import MessageListComponent from './MessageListComponent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

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

function Chat() {
  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  
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

  return (
    <div className={classes.mainWrapper}>
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

export default Chat;
