import React, { useState } from 'react';
import InputMessageComponent from './InputMessageComponent';
import MessageList from './MessageList';
import './App.css';

function App() {
  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);

  const onSendMessage = () => {
    if (inputMessage !== '') {
      var message = {
        text: inputMessage,
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
    <div className="mainWrapper">
      < MessageList
        statMessageArray={messageArray}
      />
      < div className = 'inputWrapper' >
        < InputMessageComponent
          value = { inputMessage }
          funcSetInputMessage={ setInputMessage } 
          funcSetMessageArray={setMessageArray}
          funcOnSendMessage={onSendMessage}
        />
        < button className = 'buttonSend' onClick = { onSendMessage } > Отправить </button> 
      </div>
    </div>
  );
};

export default App;
