import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <Provider store={ store }>
        <App />
        </Provider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
