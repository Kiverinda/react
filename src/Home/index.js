import React, { useState, useEffect } from 'react';
import ListChatsComponent from "./ListChatsComponent"

const Home = () => {
    const [chatsArray, setChatsArray] = useState([]);

    useEffect(() => {
        for (var item = 1; item < 3; item++) {
          var chat = {
            name: `Chat-${item}`,
            id: `${ item }`,
          };
          setChatsArray((prev) => [...prev, chat]);
        }
      }, []);

    return <ListChatsComponent listChats={ chatsArray }/>;
};

export default Home;