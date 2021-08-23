import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({

  }));

const ListChatsComponent = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
    
  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"
    className={classes.root}
  >
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Чаты" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {props.chatsList.map((item) => (
              <ListItem button key={`item-${item.id}`}>
                <ListItemText primary={`${item.name}`} />
              </ListItem>
            ))}
      </List>
    </Collapse>
  </List>
  );
}

export default ListChatsComponent;
