import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import ChatComponent from './ChatComponent';
import ListChatComponent from './ListChatComponent';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotFoundComponent from '../NotFoundComponent';



const drawerWidth = '58vh';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      display: 'flex',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
      overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
    titlemenu: {
      flexGrow: 1,
    },
    buttonmenu: {
        marginRight: theme.spacing(2),
    }
}));

const ChatsComponent = (props) => {
  
  const params = Number(useParams().chatId);
  const listChats = useSelector(state => state.chats.arrayChats);
  const classes = useStyles();

  if (params > listChats.length || params <= 0) {
    return (<NotFoundComponent />)
  }

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <ListChatComponent />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {!isNaN(params) && <ChatComponent /> }
      </main>
    </>
  );
}

export default ChatsComponent;