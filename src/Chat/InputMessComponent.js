import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    width: '85%',
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  input: {
    margin: "0px 10px",
    width: '100%',
    autoFocus: true,
  },
  primaryMessage: {
    border: '1px solid black',
    borderRadius: "15px",
    backgroundColor: '#faf5dc',
    bordeRadius: "16",
    marginBottom: "5px",
  },
}));

const InputMessComponent = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <List className={classes.list}>
          {props.statMessageArray.map(({ id, autor, avatar, text }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              <ListItem className={classes.primaryMessage}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={avatar} />
                </ListItemAvatar>
                <ListItemText primary={autor} secondary={text} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <TextField
            classes={{
              root: classes.input
            }}
            label='Введите сообщение'
              inputRef={input => input && input.focus()}
              value={props.value}
              onChange={(e) => props.funcSetInputMessage(e.target.value)}
              onKeyDown={({ key }) => {
                  if (key === 'Enter') {
                    props.funcOnSendMessage();
                  }
                }
              }
            />
        <Button
          color="primary"
          variant="contained"
          onClick={props.funcOnSendMessage}
          classes={{
            root: classes.button
          }}
        >
          <SendIcon />
        </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default InputMessComponent;