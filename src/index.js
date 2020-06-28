import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import balanceReducer from './Store/balanceReducer';
import loanReducer from './Store/loanReducer';



const store = createStore(combineReducers({
  balanceReducer,
  loanReducer
}));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


