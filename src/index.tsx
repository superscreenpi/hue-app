import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import './style.scss';
import { HashRouter } from 'react-router-dom';
import { persist } from '@superscreenpi/redux-persist-localstorage/dist';
import { initialState, rootReducer } from './store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, initialState, persist('launcher/state'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
