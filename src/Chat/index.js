import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputMessComponent from './InputMessComponent';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100%",
    margin: "0px",
    display: 'flex',
    flexDirection: 'column',
  },
}));

function Chat() {
  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  
  const classes = useStyles();
  const trimMessageText = inputMessage.trim();
  const numMessage = messageArray.length + 1;

  const onSendMessage = () => {
    if (trimMessageText !== '') {
      var message = {
        id: {numMessage},
        autor: 'admin',
        avatar: '/static/images/avatar/2.jpg',
        text: trimMessageText,
        class: 'primaryMessage'
      };
      setMessageArray((prev) => [...prev, message]);
      setInputMessage('');
      setTimeout(addAnswer, 3000);
    }
  };


  const addAnswer = () => {
    var answer = {
      id: {numMessage},
      autor: 'autor',
      avatar: '',
      text: 'Answer',
      class: 'answerMessage'
    }
    setMessageArray((prev) => [...prev, answer]);
  };

  return (
    <div className={classes.mainWrapper}>
      < div className = 'inputWrapper' >
        <InputMessComponent
          value = { inputMessage }
          funcSetInputMessage={ setInputMessage } 
          funcOnSendMessage={onSendMessage}
          statMessageArray={messageArray}
        />
      </div>

    </div>
  );
};

export default Chat;
