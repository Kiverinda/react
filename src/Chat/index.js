import React, { useState } from 'react';
import InputMessComponent from './InputMessComponent';

function Chat() {
  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  
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
    <div>
        <InputMessComponent
          value = { inputMessage }
          funcSetInputMessage={ setInputMessage } 
          funcOnSendMessage={onSendMessage}
          statMessageArray={messageArray}
        />
    </div>
  );
};

export default Chat;
