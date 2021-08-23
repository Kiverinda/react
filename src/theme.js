import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    mainWrapper: {
        width: '300px',
        height: '500px',
        border: '1px solid rgb(248, 211, 166)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'bisque'
      }
});

export default theme;