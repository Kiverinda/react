import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes  from 'prop-types';

const useStyles = makeStyles((theme) => ({
  input: {
      margin: "0px 10px",
      width: '38ch',
      autoFocus: true
  },
}));

const InputMessageComponent = (props) => {
    const classes = useStyles();
  return (
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
    );
}

InputMessageComponent.propTypes = {
  value: PropTypes.string,
  funcSetInputMessage: PropTypes.func,
  funcOnSendMessage: PropTypes.func
}

export default InputMessageComponent;