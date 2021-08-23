import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    messageList: {
        margin: '5px 5px 0px 5px',
        padding: '5px',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    autorMessage: {
        fontFamily: "Times New Roman', Times, serif",
        fontSize: "15px",
        color: "red",
    },
    
    textMessage: {
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontSize: "18px",
      color: "black",
      marginLeft: "15px",
    },
    
    autorAnswer: {
      fontFamily: "'Times New Roman', serif",
      fontSize: "15px",
      color: "blue",
      width: "100%",
      marginRight: "5px",
      textAlign: "right"
    },
    
    textAnswer: { 
      width: "100%",
      marginRight: "5px",
      textAlign: "right",
      fontSize: "18px"
    }
  }));

const MessageListComponent = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.messageList} >
            { props.statMessageArray.map((message, i) =>
                <div key={i} >
                    <div className={classes.autorMessage}>
                        { message.autor }
                    </div>
                    <div className={classes.textMessage}>
                        { message.text } 
                    </div>
                    < div className={classes.autorAnswer} >
                        { message.autorAnswer } 
                    </div> 
                    <div className={classes.textAnswer} >
                        { message.textAnswer } 
                    </div>
                </div>
                )
            }
        </div>
    )
};

MessageListComponent.propTypes = {
    statMessageArray: PropTypes.array
}
  
export default MessageListComponent;