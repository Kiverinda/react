import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


const inputMessageComponent = (props) => {
  
    return (
    <AppBar position="fixed" color="primary" >
        <Toolbar>
            <div />
            <TextField
                classes={{
 
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

                }}
            >
                <SendIcon />
            </Button>
        </Toolbar>
    </AppBar>)
};

export default inputMessageComponent;