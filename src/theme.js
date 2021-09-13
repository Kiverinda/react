import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiAppBar: {
      positionFixed: {
        height: "50px",
        backgroundColor: "#ffffff"
      },
      colorPrimary: {
        backgroundColor: "#ffffff",
        color: "c4c9cc"
      }
    },
    MuiButton: {
      text: {
        color: '#707579',
      },
    }
  },
  palette: {
    primary: {
      main: "#3290ec",
    },
    secondary: {
      main: "#c4c9cc",
    },
  },
});

export default theme;