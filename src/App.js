import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Chat from "./Chat";
import TestComp from "./TestComp"
  
const App = () => {

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
      setTimeout(addAnswer, 3000);
    }
  };

  const addChat = () => {
    const newIdChat = chatsArray.length + 1;
    var chat = {
      idChat: { newIdChat },
      autor: 'admin',
      avatar: '/static/images/avatar/2.jpg',
      class: 'chat',
      messages: [],
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

return (
      <Router>
        <div>
          <Switch>
            <Route path="/chats">
              <TestComp />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/">
          <TestComp
                    value = { inputMessage }
                    funcSetInputMessage={ setInputMessage } 
                    funcOnSendMessage={onSendMessage}
                    statMessageArray={messageArray}
          />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;