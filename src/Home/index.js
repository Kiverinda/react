import React, { useState, useEffect } from 'react';
import AppBarComponent from "../AppBarComponent";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import ChatIcon from '@material-ui/icons/Chat';
import Chat from '../Chat';

const Home = () => {
    const [chatsArray, setChatsArray] = useState([]);
    
    function ListItemLink(props) {
        const { icon, primary, to } = props;
      
        const renderLink = React.useMemo(
          () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
          [to],
        );
      
        return (
          <li>
            <ListItem button component={renderLink}>
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
              <ListItemText primary={primary} />
            </ListItem>
          </li>
        );
    };
    
    useEffect(() => {
        for (var item = 1; item < 3; item++) {
            var chat = {
                title: `Chat-${item}`,
                id: `${item}`,
                link: `/chat/${item}`,
            };
            setChatsArray((prev) => [...prev, chat]);
        }
    }, []);

    const listChats = () => {
        return (
            <List>
                {chatsArray.map((item) => (
                    <ListItem button key={item.id} divider="true">
                        <ListItemLink to={item.link} primary={item.title} icon={<ChatIcon />} />
                    </ListItem>
                ))}
            </List>
        );
    };

    const chat = () => {
        return (<Chat />);
    }

    return <AppBarComponent listChats={listChats} chat={ chat } />;
};

export default Home;