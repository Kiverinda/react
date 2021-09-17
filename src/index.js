import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistStore(store)}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
